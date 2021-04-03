
//const t0 = performance.now(); 
var tabla = document.querySelector(".tabla");
productos.forEach ( function (elemento,indice){ //recorremos todos los objetos de la lista
var row = document.createElement("tr");   //creamos un renglon en javascript
row.innerHTML = "<td>"+ elemento.nombre +"</td>"+ //le añadimos el codigo html necesario dentro de ese row
    "<td>"+elemento.precio+"</td>";
let button = document.createElement("td"); //creamos un boton aparte para agregarle un evento
button.innerHTML="<button class='bttn-slant bttn-sm bttn-danger' onclick='agregar(event)' data-index ='" + indice + "'>Agregar al carrito</button>";
//button.addEventListener('click',agregar); //evento click
row.appendChild(button); //agregamos el boton al boton
tabla.appendChild(row); //agregamos el renglon al DOM
});


//const t1 = performance.now(); 
//console.log("la operación tomó " + (t1 - t0) + " milisegundos.");
