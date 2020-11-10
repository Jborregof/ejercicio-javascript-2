// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  //Buscamos el elemento cuya clase es selected. De este partiremos el resto del ejercicio
  const spanIni = document.querySelector(".selected");

  //Mediante el span anterior, daremos dos pasos atras para llegar al nodo ul y cogeremos una lista de sus hijos. luego recorreremos esa lista (la cual serán los li) y le insertamos el atributo class=element-n
  var lista = spanIni.parentNode.parentNode.children;
  for (n = 0; n < lista.length; n++) {
    //dos formas de añadir la clase
    lista[n].firstChild.classList.add("element-" + (n + 1));
    //lista[n].firstChild.setAttribute("class", "element-" + (n + 1));
  }

  //Uso del querySelectorAll para obtener solo los elementos li pares
  var ul1 = document.getElementById("list1");
  //Selecciono todos los li hijos inmediatos del id list1 cuya posicion sea par
  const evenNodes = document.querySelectorAll("#list1>li:nth-of-type(even)");
  // Recorremos esa lista y borramos dichos nodos
  for (n = 0; n < evenNodes.length; n++) {
    ul1.removeChild(evenNodes[n]);
  }

  //Copiamos la ul1 en lista2
  var ul2 = document.getElementById("list2");
  //Recorremos la lista1
  for (i = 0; i < lista.length; i++) {
    //Creamos el li que estará en la posicion i
    let liI = document.createElement("li");
    //Le ponemos de innerHTML el mismo que el li correspondiente de la lista1 pero cambiando span por button
    liI.innerHTML = lista[i].innerHTML.replaceAll("span", "button");
    //lo insertamos dentro de ul2 despues de su ultimo hijo
    ul2.insertAdjacentElement("beforeend", liI);
  }
  //Añadimos el atributo disabled
  ul2.lastElementChild.firstElementChild.setAttribute("disabled", "");
}
