angular.module("todoApp", [])
.controller("TodoCtrl", TodoCtrl);


function TodoCtrl(){
    this.editMode = false;
    this.todos = [
        "Learn AnularJS", 
        "Advance in Spring",
        "Learn NodeJS"

    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    }
}
