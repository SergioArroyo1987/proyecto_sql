function calculo(){
let  dato1=prompt("Introduzca su peso");
let  dato2=prompt("Introduzca su altura");
let peso=parseInt(dato1);
let altura=parseInt(dato2)/100;
let resultado=peso/(altura*altura);

if(resultado<18.5){
    alert("BAJO PESO");
}else if(resultado>=18.5 && resultado<=24.9){
        alert("ADECUADO");
    }
    else if(resultado>=25.0 && resultado<=29.9){
        alert("OBESIDAD GRADO 1");
    }
    else if(resultado>=30.0 && resultado<=34.9){
        alert("OBESIDAD GRADO 2");
    }
    else if(resultado>=35.0&&resultado<=39.9){
        alert("OBESIDAD GRADO 3");
    }
    else if(resultado>=40.0){
        alert("ADECUADO GRADO 4");
    }
}

