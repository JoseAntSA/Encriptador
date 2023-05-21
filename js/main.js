function obtenerTexto(){
    // Obtenemos componentes a los que cambiaremos el estilo
    var txtSalida = document.getElementById('txtSalida');
    var contDer = document.getElementById('txtAreaSalida');
    var btnCopy = document.getElementById('btnCopiar');

    // Cambiamos su estilo
    txtSalida.style.cssText = 'align-items:initial; justify-content: left';
    contDer.style.cssText = 'text-align: left;';
    btnCopy.style.cssText = 'width: 8%;';

    // Obtenemos y retornamos el texto de entrada
    return document.getElementById('txtEntrada').value;
    }

function getValor(diccionario, variable){
    // Obtenemos ya sea palabra o letra del diccionario
    if(variable.length=1){
        return diccionario.find(valor => valor.letra === variable).palabra
    }else{
        return diccionario.find(valor => valor.palabra === variable).letra
    }
}

// Creamos el diccionario de palabras y letras
const diccionario = [
    {letra: 'a', palabra: 'ai'},
    {letra: 'e', palabra: 'enter'},
    {letra: 'i', palabra: 'imes'},
    {letra: 'o', palabra: 'ober'},
    {letra: 'u', palabra: 'ufat'}];

function encriptar(){
    // Obtenemos texto a encriptar
    const texto = obtenerTexto();
    
    // Creamos cadena donde se almacenara el string encriptado
    var cadF = '';

    // Realizamos la encriptacion con ayuda del diccionario
    for(let i=0 ; i<texto.length ; i++){
        if(diccionario.find(valor => valor.letra === texto[i])){
            cadF += getValor(diccionario, texto[i]);
        }else{
            cadF += texto[i];
        }
    }
    // Escribimos el string encriptado en el area de salida
    document.getElementById('txtAreaSalida').innerHTML=''+ cadF;
}

function desencriptar(){
    // Obtenemos texto a encriptar
    var texto = obtenerTexto();

    // Realizamos la desencriptacion con ayuda del diccionario
    
    for(let i=0 ; i<diccionario.length ; i++){
        texto = texto.replaceAll(diccionario[i].palabra, diccionario[i].letra);
    }
    // Escribimos el string desencriptado en el area de salida
    document.getElementById('txtAreaSalida').innerHTML=''+ texto;
}

function copiar(){       
    // Extraemos el texto del area de salida
    let copyText = document.getElementById('txtAreaSalida').innerText
    
    // Creamos un input para poder copiar el texto dentro
    const textArea = document.createElement('textarea');
    
    // Guardamos en el mismo el texto a copiar.
    textArea.textContent = copyText;
    document.body.append(textArea); 
    
    // Seleccionamos el contenido del mismo.      
    textArea.select();       
    document.execCommand("copy");       
    // Borramos el textarea que creamos       
    textArea.remove() 
  }
