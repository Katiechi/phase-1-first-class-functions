aCallbackFunction = function (){
    console.log('This is the primary callback function ')
}

function receivesAFunction(callback){
    callback()
}
receivesAFunction(aCallbackFunction)

const oneInput = function(input){
    if(input === "Brian"){
        return `Keep pushing Brian`
    }
    else{
        return `Keep pushing ${input}`
    }
    
}
oneInput('Brian')



function returnsANamedFunction(){
  return function oneInput(input){
    if(input === "Brian"){
        return `Keep pushing Brian`
    }
    else{
        return `Keep pushing ${input}`
    }
    
}
  
}
console.log(returnsANamedFunction())

function returnsAnAnonymousFunction() {
    return (a=5, b=7) => a *b
  }

console.log(returnsAnAnonymousFunction())