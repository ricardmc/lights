angular.module('board',[])

.controller('boardController', function($scope, $rootScope, $elem) {

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
    ]

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

        console.log(xy)

        changeState(xy);
        /*if(id != $scope.lights.length - 1){
            changeState(id + 1);
        }
        if (id != 0){
            changeState(id - 1);
        }
        if(id < $scope.lights.length - 4) {
            changeState(id + 4);
        }
        if(id > 3) {
            changeState(id - 4);
        }*/

        if(1 < x){
            xy -= 10;
            changeState(xy);
        }
        if(x < 4){
            xy += 10;
            changeState(xy)
            //console.log('x+1 correcte')
        }
        if(1 < y){
            xy -= 1;
            changeState(xy);
            //console.log('y-1 correcte')
        }
        if(y < 4){
            xy += 1;
            changeState(xy);
            //console.log('y+1 correcte')
        }

        console.log('--------')
    }


    function changeState(id){
        var element = elem.find('#'+id);
        console.dir($elem)

        /*if($scope.lights[id].className === $scope.classOn){
            $scope.lights[id].className = $scope.classOff;
        }else{
            $scope.lights[id].className = $scope.classOn;
        }*/
    }



    initialize();
})
