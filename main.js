const prompt = require("prompt-sync")({ sigint: true });


var num1
var operador
var num2
var resultado
var input
var loop = true
function get_numbers(){
    console.log("Calculadora! \n")
    num1 = prompt("\ncoloque um numero: ")
    operador = prompt("coloque o operador: ")
    num2 = prompt("coloque outro numero: ")
}


function somar(a, b){
    var DECIMALS = 10
    return parseInt(a, DECIMALS) + parseInt(b, DECIMALS)

}

function subtrair(a,b){
    return a - b
}

function dividir(a, b){
    return a / b
}

function multiplicar(a, b){
    return a * b 
}


function verify_null(a){
    if (a){
        return true
    }
 
}
function exit(){
    input = prompt("\n deseja sair? y/n \n")
    if (verify_null(input) === true){
        switch(input){
            case "y":
                loop = false
                break
                
            case "Y":
                loop = false

            case "n":
                break
            
            case "N":
                break
            }
        console.log("Obrigado Por usar a Calculadora")
        }
    else{
        console.log("\ncampo vazio tente novamente\n")
        exit()
    }
}
function verify_operator(){
    if (verify_null(operador) === true){
        switch(operador){
            case "+":
                resultado = somar(num1, num2)
                break
    
            case "-":
                resultado = subtrair(num1, num2)
                break
            
            case "/":
                resultado = dividir(num1, num2)
                break
            
            case "*":
                resultado = multiplicar(num1, num2)
                break
    
            case "":
                console.log("error")
        }
        console.log("\nresultado é igual a "+ resultado)
    }
    else{

        console.log("\ncampo vazio tente novamente\n")
        get_numbers()
    }

}

while (loop === true){
    get_numbers()
    verify_operator()
    exit()
}