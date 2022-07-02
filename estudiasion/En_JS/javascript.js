function verificar() {
    var numero = document.formulario.txt_numero.value
    if (numero==0)
    {
        document.formulario.txt_mostrar.value = "Es neutro"
    }
    else if (numero>0)
    {
        document.formulario.txt_mostrar.value = "Es positivo"
    }
    else{
        document.formulario.txt_mostrar.value = "Es negativo"
    }
    return false
}