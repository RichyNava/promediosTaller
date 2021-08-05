lista=[];
function pushList(){
    const inputNumero=document.getElementById('inputNumber');
    const numero=parseInt(inputNumero.value);
    console.log(numero);
    console.log(typeof(numero));
    lista.push(numero);
    console.log(lista);
}
function promedio(){
    var i =0;
    var suma=parseInt(0);

    while(i<parseInt(lista.length)){
        suma=suma+lista[i];
        console.log(suma);
        console.log(lista.length);
        i++;

    }
    const parr=document.getElementById('parrafo');
    var result=suma/parseInt(lista.length);
    parr.innerText='el promedio es: '+result;
    

}