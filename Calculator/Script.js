let string = "";
let result = document.querySelector('input');

function display(num){
    string += num;
    result.value = string;
}
function cal(){
    try{
        string = eval(string);
        result.value = string;
    }catch(err){
        string = "";
        result.value = string;
        alert("Enter the right input");
    }
}

function cls(){
    string = "";
    result.value = string;
}