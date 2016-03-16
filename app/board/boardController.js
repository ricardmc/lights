angular.module('board',[])

.controller('boardController', function($scope) {

    $scope.lights = [
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell-o'},
        {className: 'uk-icon-bell'},
    ]

    function initialize() {
        $scope.titol = 'Lights ON';
        $scope.classOn = 'uk-icon-bell';
        $scope.classOff = 'uk-icon-bell-o';

        $scope.numOfLights = 4;
    }

    $scope.lightOn = function (id) {
        changeState(id);
        if (id != $scope.lights.length - 1){
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
        }
    }


    function changeState(id){
        if($scope.lights[id].className === $scope.classOn){
            $scope.lights[id].className = $scope.classOff;
        }else{
            $scope.lights[id].className = $scope.classOn;
        }
    }



    initialize();
})
