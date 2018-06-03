angular.module("moreDirectivesApp", [])
.controller("MoreDirectivesCtrl", MoreDirectivesCtrl);


function MoreDirectivesCtrl(){
    this.myList = [
        {'name': "Bob", "age":322},
        {"name": "Marly", 'age': 34, 'livesIn':"Jamaca"},
        {'name': "David Bowie", "age":322}
    ];
}
