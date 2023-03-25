comands_list = {

	'help': ()=>{
		outputPrint(`
			========================================== <p></p>
			Lista de todos los comandos disponibles: <p></p>
			========================================== <p></p>
			HELP--------Obtener una lista de todos los comandos disponibles. <p></p>
			CLEAR-------Limpiar la pantalla. <p></p>
			CMT---------Obtener version e informacion de este programa. <p></p>
			GO----------Abrir una direccion web. <p></p>
			SEARCH------Abrir un buscador web. <p></p>
			RESET-------Formatear Pc. <p></p>

			`)
	},

	'clear': ()=>{
		outputClear();
	},

	'cmt': ()=>{
		outputPrint(` 
			Comands Terminal [Versión 10.0.19042.1766] <p></p>
			(c) Lex-Lutor Corporation. Todos los derechos reservados. <p></p>
			`)
	},

	'reset': ()=>{
		outputPrint(` 
			Formateando PC <p></p>
			... <p></p>
			`)
		setTimeout((function(){
			document.body.style='background:blue;color:white;font-size:';
			document.body.innerHTML =  `
			<h1 style="font-size:60px">:(</h1>
			Error. CODE:3455ba
			`;
		}),2000)
	},
}


output = document.getElementById('output');
input = document.getElementById('comand-input');
comand = '';


//Input and Output 
function checkComand(comand){
	if (comands_list[comand]) {
		comands_list[comand]();
	}
	else if (comand.slice(0,2)=='go') {
		window.open(`https://${comand.slice(3)}`);
	}
	else if (comand.slice(0,6)=='search') {
		if (comand.slice(comand.length-2)=='-d') {
			outputPrint(`Searching '${comand.slice(7,comand.length-3)}' with DuckDuckGO...`);
			window.open(`https://duckduckgo.com/?q=${comand.slice(7,comand.length-3)}`)
		}
		else if (comand.slice(comand.length-2)=='-g') {
			outputPrint(`Searching '${comand.slice(7,comand.length-3)}' with Google...`);
			window.open(`https://www.google.com/search?q=${comand.slice(7,comand.length-3)}`)
		}
		else if (comand.slice(comand.length-2)=='-b') {
			outputPrint(`Searching '${comand.slice(7,comand.length-3)}' with Bing...`);
			window.open(`https://www.bing.com/search?q=${comand.slice(7,comand.length-3)}`)
		}
	}
	else if (comand.slice(0,2)=='sr') {
		if (comand.slice(comand.length-2)=='-d') {
			outputPrint(`Searching '${comand.slice(3,comand.length-3)}' with DuckDuckGO...`);
			window.open(`https://duckduckgo.com/?q=${comand.slice(3,comand.length-3)}`)
		}
		else if (comand.slice(comand.length-2)=='-g') {
			outputPrint(`Searching '${comand.slice(3,comand.length-3)}' with Google...`);
			window.open(`https://www.google.com/search?q=${comand.slice(3,comand.length-3)}`)
		}
		else if (comand.slice(comand.length-2)=='-b') {
			outputPrint(`Searching '${comand.slice(3,comand.length-3)}' with Bing...`);
			window.open(`https://www.bing.com/search?q=${comand.slice(3,comand.length-3)}`)
		}
	}
	else {
		outputPrint(` 
			El comando '${comand}' no existe. <p></p>
			Para obtener una lista de los comandos disponibles ecriba 'help'.
			`)
	}
}

function outputPrint(str){
	output.innerHTML += `~$ ${comand} <p></p>
							${str} <p></p>`;
}

function outputClear(str){
	output.innerHTML = '';
}

function Input(e){
	if (e.code=='Enter') {
		comand = input.value;
		checkComand(comand);
		input.value = '';
		comand = input.value;
	}
}

input.addEventListener('keypress',Input)