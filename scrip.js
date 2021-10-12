function sumar(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = parseInt(num1) + parseInt(num2);
    alert('La suma de los numeros es: ' +resultado);
}
function restar(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = parseInt(num1) - parseInt(num2);
    alert('La resta de los numeros es: ' +resultado);
}
function multi(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = parseInt(num1) * parseInt(num2);
    alert('La multiplicacion de los numeros es: ' +resultado);
}
function div(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = parseInt(num1) / parseInt(num2);
    alert('La dividir de los numeros es: ' +resultado);

}
function ver(){

    var dato = document.getElementById('materia').value;

    switch (dato) {
        case 'Programacion':
            alert('usted a seleccionado Programacion');
            break;
            case 'Soporte TI':
                alert('usted a seleccionado Soporte de TI');
                break;
                case 'TICS':
                alert('usted a seleccionado TICS');
                break; 
                case 'Diseño de software':
                alert('usted a seleccionado Diseño de software');
                break; 
        default:
            break;
    }
}
function edad(){
    var num1 = document.getElementById('e1').value;
    if(num1>=18){
        alert ('eres mayor de edad')
    }
    else{
        alert('eres menor de edad ')
    }
}