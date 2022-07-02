function validar()
         {
             var nombre = document.formulario.txt_nombre.value
             var edad = document.formulario.txt_edad.value
             var correo = document.formulario.txt_correo.value
             if (nombre.length<3)
             {
                 alert("Nombre debe tener al menos 3 caracteres");
                 document.formulario.txt_nombre.focus();
                 return false;
             }
             if (parseInt(edad)<18 || parseInt(edad)>65)                
             {
                    alert("edad debe ser entre 18 y 65");
                    document.fomulario.txt_edad.focus();
                    return false;
            }
            if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
            {
                alert("Correo debe incluir un @ y un punto");
                document.formulario.txt_correo.focus();
                return false;
            }
            document.formulario.action = "http://www.pagina.cl"
            document.formulario.submit() = true
         }