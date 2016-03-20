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
        console.log('--------')
    }


    function changeState(id){
        var element = angular.element.find('#'+id);
        var classElement = element[0].className;
        //console.log(id[0]+' - '+id[1])

        if(classElement === $scope.classOn){
            element[0].className = $scope.classOff;

        }else{
            element[0].className = $scope.classOn;
        }
    }

    function checkStatusGame(){
        /*var lights = angular.element
        $scope.lights.forEach(function(light){
            console.log(light.className);
        })*/
    }


})
