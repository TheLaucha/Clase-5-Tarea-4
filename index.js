const $numeros = document.querySelectorAll("li");
let newArray = [];
let totalList = 0;
let totRepetidos = 0;
let arreglo = [];

for (i = 0; i < $numeros.length; i++){
	newArray.push($numeros[i].innerText);
}

for (i = 0; i < $numeros.length; i++){
	totalList += Number($numeros[i].innerText);
}

const $botonPromedio = document.querySelector("#calcular-promedio");
$botonPromedio.onclick = function calcularPromedio(){
	let promedio = parseFloat(totalList / $numeros.length);
	document.querySelector("#promedio").textContent = (promedio);
	return false;
}

const $numeroPequeño = document.querySelector("#calcular-pequeño");
$numeroPequeño.onclick = function numeroPequeño (){
	let numeroMasPequeño = Math.min(...newArray);
	document.querySelector("#pequeño").textContent = (numeroMasPequeño);
	return false; 
}

const $numeroGrande = document.querySelector("#calcular-mayor");
$numeroGrande.onclick = function numeroMasGrande(){
	let numeroMasGrande = Math.max(...newArray);
	document.querySelector("#grande").textContent = (numeroMasGrande);
	return false;
}


const $numeroFrecuente = document.querySelector("#numero-frecuente");
$numeroFrecuente.onclick = function numeroFrecuente(){
	let compareArray = newArray;
	for (i=0; i < newArray.length; i++){
		for (l = 0; l < newArray.length; l++){
			if (newArray[i] === compareArray[l]){
				totRepetidos++
			}
		}
		arreglo.push(totRepetidos);
		totRepetidos = 0;
	}

	let encontrarMayor = Math.max(...arreglo)
	let encontrarIndice = arreglo.indexOf(encontrarMayor);
	let numeroMasFrecuente = newArray[encontrarIndice];
	document.querySelector("#frecuente").textContent = (numeroMasFrecuente);
	return false;
}