var app = angular.module("calculatorApp", []);

app.controller("CalculatorCtrl", CalculatorCtrl);


function CalculatorCtrl(){
    this.result = 0;
    this.buttonClicked = function(button){
        this.operant = button;
        
    }
    this.calculate = function(){
        var num1 = parseFloat(this.operator1);
        var num2 = parseFloat(this.operator2);
        // this.result = num1 + num2;

        if(this.operant === '+'){
            this.result = num1 + num2;
        }
        else if (this.operant === '-'){
            this.result = num1 - num2;
        }
        else if(this.operant === '*')
            this.result = num1 * num2;
        else if (this.operant === '/')
            this.result = num1 / num2;
    }

}
