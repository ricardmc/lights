angular.module('board',[])

.controller('boardController', function($scope) {

    $scope.lights = [
        {className: 'uk-icon-bell', y:'1', x:'1'},
        {className: 'uk-icon-bell', y:'1', x:'2'},
        {className: 'uk-icon-bell', y:'1', x:'3'},
        {className: 'uk-icon-bell-o', y:'1', x:'4'},
        {className: 'uk-icon-bell-o', y:'2', x:'1'},
        {className: 'uk-icon-bell', y:'2', x:'2'},
        {className: 'uk-icon-bell-o', y:'2', x:'3'},
        {className: 'uk-icon-bell', y:'2', x:'4'},
        {className: 'uk-icon-bell-o', y:'3', x:'1'},
        {className: 'uk-icon-bell-o', y:'3', x:'2'},
        {className: 'uk-icon-bell', y:'3', x:'3'},
        {className: 'uk-icon-bell-o', y:'3', x:'4'},
        {className: 'uk-icon-bell', y:'4', x:'1'},
        {className: 'uk-icon-bell-o', y:'4', x:'2'},
        {className: 'uk-icon-bell-o', y:'4', x:'3'},
        {className: 'uk-icon-bell', y:'4', x:'4'},
    ];

    initialize();

    function initialize() {
        $scope.titol = 'Lights ON';
        $scope.classOn = 'uk-icon-bell';
        $scope.classOff = 'uk-icon-bell-o';

        $scope.numOfLights = 4;
    }

    $scope.lightOn = function (id, $event) {
        var x = $event.currentTarget.dataset.x;
        var y = $event.currentTarget.dataset.y;
        var xy = x + y;

        changeState(xy);

        if(1 < x){
            changeState(parseInt(xy) - 10);
        }
        if(x < 4){
            changeState(parseInt(xy) + 10);
        }
        if(1 < y){
            changeState(parseInt(xy) - 1);
        }
        if(y < 4){
            changeState(parseInt(xy) + 1);
        }

        checkStatusGame();
    }


    function changeState(id){
        var element = angular.element.find('#'+id);
        var classElement = element[0].className;


        if(classElement === $scope.classOn){
            element[0].className = $scope.classOff;
            editLights(id, false);
        }else{
            element[0].className = $scope.classOn;
            editLights(id, true);
        }
    }

    function editLights(id,on){
        var digits = (""+id).split("");
        var len = $scope.lights.length;

        for(var i=0; i < len; i++){
            if($scope.lights[i].x == digits[0] && $scope.lights[i].y == digits[1]){
                if(on){
                    $scope.lights[i].className = $scope.classOn;
                }else{
                    $scope.lights[i].className = $scope.classOff;
                }
            }
        }
    }

    function checkStatusGame(){
        var on = 0;
        var off = 0;

        $scope.lights.forEach(function(light){
            if(light.className == $scope.classOn){
                on++;
            }else{
                off++;
            }
        })

        if(on == $scope.lights.length){
            alert('Has guanyat!');
        }
    }
})
