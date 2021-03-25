/**
Esto es una función para recargar la página que la usaremos y la 
llamaremos desde un boton
 */
function recargar() {
  location.reload();
}
/**  Creamos una variable portatils para guardar todos los portatiles con sus datos
*/
var portatils;

/** Funcion donde guardaremos los datos de los partatiles
*/
function guardarDades(){
/** Creamos una variable inputs que sera igual al tagName input.
*/	
var inputs = document.getElementsByTagName("input");
/** Creamos en el objeto portatils todos los datos que introduciremos
para guardarlos.*/
portatils ={

	marca: inputs[0].value,
	model: inputs[1].value,
	cpu: inputs[2].value,
	ram: inputs[3].value,
	discdur: inputs[4].value,
	capacitat: inputs[5].value,
	mida: inputs[6].value,
};
/**Convertimos el objeto portatils en una cadena
*/ 
var myJSON = JSON.stringify(portatils);
console.log(myJSON);
/** Almacenamos la informacion en sessionStorage
*/
sessionStorage.setItem("portatils",myJSON);

}

/** Creamos una funcion para mostrar los datos del último portatil introducido.
*/
function mostrardatos(){
	/** Obtenemos la información almacenada desde sessionStorage.
	*/
	 var mos = sessionStorage.getItem("portatils");
	 /**Usamos el metodo JSON.parse para analizar la cadena 
	 almacenada del sessionStorage
	 */
	 mosObj = JSON.parse(mos);
	 /** Mostramos los datos del último poratil en un parrafo llamado 
	 a traves de un id llamado dades. */
  document.getElementById("dades").innerHTML = "Marca: " + mosObj.marca + "<br/> Model: " + mosObj.model + "<br/> Model CPU: " + mosObj.cpu
  			 + "<br/> Capacitat RAM: " + mosObj.ram + "<br/> Tipus disc dur: " + mosObj.discdur + "<br/> Capacitat disc dur: " + mosObj.capacitat 
  			 + "<br/> Mida de la pantalla: " + mosObj.mida;

 }

/** Funcion para eliminar todos los datos almacenados en el sessionStorage
 */
function eliminarlocalstorage(){
 	sessionStorage.clear();
 }


