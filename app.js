var app = angular.module("clockApp", []);
app.controller("ClockCtrl", Clock);

function Clock($scope) {
    var date = new Date();
    $scope.curTime = date.toTimeString();
    $scope.userName = "";
    $scope.updateTime = function(){
        console.log("Button clicked");
        var date = new Date();
        $scope.curTime = date.toTimeString();
    }
}