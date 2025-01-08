import React, {useState} from "react";

//create your first component
const Home = () => {
	let contador = 0
	// const contadorMemoria = 0
	// function modifcaContadorMemoria(param){
	// 	contadorMemoria = param
	// }
	const [contadorMemoria, setContadorMemoria] = useState(0)
	//useState() ==> retorna un array
	// (variable, una funcion)
	const [ cliksCounter, setClicksCounter ] = useState(0)

	function add(){
		console.log('agergar boton')
		console.log(contador)
		contador++
		console.log(contador)
		setContadorMemoria(contadorMemoria + 1)
		setClicksCounter(cliksCounter + 1)
		// setContadorMemoria(25) ====> contadorMemoria = 25
		// contadorMemoria++ ===> contadorMemoria = contadorMemoria + 1
		// setContadorMemoria(contadorMemoria++) ====> contadorMemoria = contadorMemoria++
		// setContadorMemoria(contadorMemoria++) ====> contadorMemoria = contadorMemoria = contadorMemoria + 1
	}

	function restar(){
		console.log('restar')

		if(contadorMemoria > 0){
			console.log('puedes restar')
			setContadorMemoria(contadorMemoria -1 )
			setClicksCounter(cliksCounter + 1)
		}else{
			console.log('NO puedes restar')
		}
		// contadorMemoria = contadorMemoria -1 
	}

	return (
		<>
			<h1 className="text-center mt-5">Bienvenidos a React Hooks!</h1>
			<p>contador: {contador}</p>
			<p>contador con memoria: {contadorMemoria}</p>
			<button onClick={add} >agregar</button>
			<div>
				<button onClick={restar}>restar</button>
			</div>
			<p>utilizaste la app {cliksCounter} veces</p>

		</>
	);

};


export default Home;