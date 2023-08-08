let Ingreso = document.getElementById('Digitar');
let Expresion = '';

function Digitar(Valor){
    Expresion += Valor;
    Ingreso.value = Expresion;
}

function Calcular(){
    try{
        let Resultado = eval(Expresion);

        if (Resultado === Infinity || isNaN(Resultado)){
            Ingreso.value = 'Error';
        } 
        
        else{
            Ingreso.value = Resultado;
        }

        Expresion = Ingreso.value;
    } 
    
    catch (error){
        Ingreso.value = 'Error';
        Expresion = '';
    }
}

document.addEventListener('keydown', 
    function (Movimiento){
        Movimiento.preventDefault();

        if (/[\d\/\*\-\+\(\)\.%]|Enter|Backspace/i.test(Movimiento.key)){
            if (Movimiento.key === 'Enter'){
                Calcular();
            } 
            
            else if (Movimiento.key === 'Backspace'){
                Expresion = Expresion.slice(0, -1);
                Ingreso.value = Expresion;
            } 
            
            else{
                Digitar(Movimiento.key);
            }
        }
    }
);