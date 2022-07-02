let comunas = ["Provincia","Macul","Santiago","Peñaflor","La flroida"]
comunas.sort()
for (var i = 0; i < comunas.length; i++)
{
    console.log((i+1)+". "+comunas[i])
}

let arreglo = []
for (var i=0; i<10; i++)
{
    arreglo.push(parseInt(Math.random()*100))
}
console.log(arreglo)

// var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

// let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

// const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.