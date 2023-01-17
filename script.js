
$('#criptografar').on("click",adicionarTexto)

function adicionarTexto() {
    var valorDoComentario = $('#textarea').val()

    $('#mensagemRetorno').text(valorDoComentario)
}

