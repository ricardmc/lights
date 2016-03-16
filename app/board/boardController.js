angular.module('board',[])

.controller('boardController', function($scope){

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

    $scope.lightOn = function(id){
        if($scope.lights[id].className === $scope.classOn){
            $scope.lights[id].className = $scope.classOff;

            $scope.lights[id+1].className = $scope.classOff;
            $scope.lights[id-1].className = $scope.classOff;
        }else{
            $scope.lights[id].className = $scope.classOn;

            $scope.lights[id+1].className = $scope.classOn;
            $scope.lights[id-1].className = $scope.classOn;
        }

        /*if($event.currentTarget.className === $scope.classOn){
            $event.currentTarget.className = $scope.classOff;
        }else{
            $event.currentTarget.className = $scope.classOn;
        }*/
    }



    initialize();
})
