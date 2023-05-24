function obtenerTexto(){
    // Obtenemos y retornamos el texto de entrada
    return document.getElementById('txtEntrada').value;
}

function modificarCSS(){
    // Obtenemos componentes a los que cambiaremos el estilo
    const txtSalida = document.getElementById('txtSalida');
    const btnCopy = document.getElementById('copiar');

    // Cambiamos su estilo
    txtSalida.style.cssText = 'align-items:initial; justify-content: left;';
    btnCopy.style.cssText = 'display: flex;';
}

function verificar(cadena){
    // Testeamos la cadena para verificar si hay mayusculas, caracteres expeciales, acentos o si es la cadena esta vacia
    if(cadena===''){
        alert('No ha introducido alguna letra.');
        return true;
    } 
    if(/[^a-z\s]/.test(cadena)){
        alert('El texto contiene alguna letra mayúscula, acento o carácter especial.');
        return true;
    }
    return false;
}

function getValor(diccionario, variable){
    // Obtenemos ya sea palabra o letra del diccionario
    if(variable.length==1)
        return diccionario.find(valor => valor.letra === variable).palabra
    else
        return diccionario.find(valor => valor.palabra === variable).letra
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
    
    if(verificar(texto))
        return;   

    modificarCSS();
    
    // Creamos cadena donde se almacenara el string encriptado
    let cadF = '';

    // Realizamos la encriptacion con ayuda del diccionario
    for(let i=0 ; i<texto.length ; i++){
        if(diccionario.find(valor => valor.letra === texto[i]))
            cadF += getValor(diccionario, texto[i]);
        else{
            cadF += texto[i];
        }
    }
    cadF = cadF.replaceAll('\n', '<br>');
    console.log(cadF);
    document.getElementById('txtSalida').innerHTML=''+ cadF;
    
}

function desencriptar(){
    // Obtenemos texto a encriptar
    let texto = obtenerTexto();

    if(verificar(texto))
        return;
    
    modificarCSS();

    // Realizamos la desencriptacion con ayuda del diccionario
    for(let i=0 ; i<diccionario.length ; i++){
        texto = texto.replaceAll(diccionario[i].palabra, diccionario[i].letra);
    }
    texto = texto.replaceAll('\n', '<br>');

    // Escribimos el string desencriptado en el area de salida
    document.getElementById('txtSalida').innerHTML=''+ texto;
}

function copiar(){       
    // Obtenemos el componente del texto a extraer
    let copyText = document.getElementById('txtSalida').innerText
    
    // Creamos un input para poder copiar el texto dentro
    const textArea = document.createElement('textarea');
    
    // Guardamos en el input el texto a copiar.
    textArea.textContent = copyText;
    document.body.append(textArea); 
    
    // Seleccionamos el contenido del mismo.      
    textArea.select();       
    document.execCommand('copy');       
    // Borramos el textarea que creamos       
    textArea.remove() 
    alert('Texto copiado!');
  }

function limpiar(){
    // Obtenemos el componente del texto a limpia
    const btnClean = document.getElementById('limpiar');
    // Limpiamos el texto de la parte de entrada
    document.getElementById('txtEntrada').value = "";
    // Escondemos el componente
    btnClean.style.cssText = 'display: none;';
}

function esconderBtn(){
    // Obtenemos los componentes a esconder
    let cad = document.getElementById('txtEntrada').value;
    const btnClean = document.getElementById('limpiar');
    
    // Condicionamos su escondite
    if(cad==='')
        btnClean.style.cssText = 'display: none;';
    else
        btnClean.style.cssText = 'display: flex;';


}