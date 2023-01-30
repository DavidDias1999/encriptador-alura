var textRemove1 = document.querySelector(".removeCriptografar1")
var textRemove2 = document.querySelector(".removeCriptografar2")

// Criando o p para trocar com a img

var el = document.createElement("textarea");
el.classList = "mensagem";


// elemento que quero trocar

var img = document.querySelector(".img-boy");

//selecionar o pai do elemento

var dad = document.querySelector(".output");

const textArea = document.querySelector(".texto");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    valorCript = document.createTextNode(textoEncriptado);
    el.appendChild(valorCript);
    dad.replaceChild(el, img);

    textArea.value = "";

    textRemove1.remove();
    textRemove2.remove();

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptada;
}

var elDescript = document.createElement("textarea");
elDescript.classList = "mensagem";

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    valorDescript = document.createTextNode(textoDesencriptado);
    elDescript.appendChild(valorDescript);
    dad.replaceChild(elDescript, el);
    
    textArea.value = "";

    textRemove1.remove();
    textRemove2.remove();

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    return stringDesencriptada;
}


var btnCopy = document.querySelector(".copiar")


function btnCopiar(){
    
    
    
    var textoRetorno = document.querySelector(".mensagem").value;
    
    
    navigator.clipboard.writeText(textoRetorno);
    
    textoRetorno.value = "";
    
    // window.location.reload();
} 