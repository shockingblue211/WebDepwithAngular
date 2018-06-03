var app = angular.module("nestedControllers", []);

app.controller("Ctrl1", Ctrl1);
app.controller("Ctrl2", Ctrl2);

function Ctrl1(){
    // when use controller as syntax, there is an explicit statement:
    // var this = $scope
    this.testProp = "From Ctrl 1";
}

function Ctrl2(){
    // when use controller as syntax, there is an explicit statement:
    // var this = $scope
    this.testProp = "From Ctrl 2"; 
}