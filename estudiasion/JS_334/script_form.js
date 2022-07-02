function validar() {
    //Código de producto deberá comenzar con una ‘A’, ‘X’ O ‘H’ mayúsculas 
    //seguido de 6 caracteres sumando un total de 7
    let codigo = document.formulario.txt_codigo.value;
    let producto = document.formulario.opt_producto.value;
    let dimensiones = document.formulario.txt_dimensiones.value;
    let descripcion = document.formulario.txa_descripcion.value;
    let pais = document.formulario.txt_pais.value;
    let precio = document.formulario.txt_precio.value;
    let tienda = document.formulario.txt_numero_tienda.value;
    if ((codigo.charAt(0)!='A' && codigo.charAt(0)!='X' && codigo.charAt(0)!='H') || (codigo.length!=7))
                                                                                //&&&and y || es or
    {
        alert("Código debe iniciar con:A, X o H mayúsculas y tener un largo de 7 caracteres");
        document.formulario.txt_codigo.focus();
        return false;
    }
    if (producto.length==0)
    {
        alert("Debe seleccionar un producto");
        document.formulario.opt_producto.focus();
        return false;
    }
    if (dimensiones.length==0)
    {
        alert("Debe ingresar dimensiones del producto");
        document.formulario.opt_dimensiones.focus();
        return false;
    }
    if (descripcion.length==0)
    {
        alert("Debe ingresar descripción del producto")
        document.formulario.txa_descripcion.focus();
        return false;
    }
    if (pais.toUpperCase()!="CHILE" && pais.toUpperCase()!="COLOMBIA" && pais.toUpperCase()!="ARGENTINA" && pais.toUpperCase()!="BRASIL" )
     {
          alert("Solo puede ingresar CHILE, COLOMBIA, ARGENTINA O BRASIL");
          document.formulario.txt_pais.focus();
          return false;
       }
     if (parseInt(precio)<1000)
     {
         alert("Precio debe ser superior a 1000");
         document.formulario.txt_precio.focus();
         return false;
     }
     if (parseInt(tienda)<1 || parseInt(tienda)>7)
      {
          alert("Número de tienda debe ser entre 1 y 7");
          document.formulario.txt_numero_tienda.focus();
          return false;
      }
    alert("¡¡¡ Todo Correcto !!!");
  }

//   numeros siempre parsealos