// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

// b) Qual o código para imprimir o nome do **último** ator/atriz?

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?

// d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`

const filme = {
	 	nome: "Auto da Compadecida", 
	 	ano: 2000, 
		elenco: [
	 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
	 		"Virginia Cavendish"
	 		], 
	 	transmissoesHoje: [
	 		{canal: "Telecine", horario: "21h"}, 
	 		{canal: "Canal Brasil", horario: "19h"}, 
	 		{canal: "Globo", horario: "14h"}
	 		]
	 }
 // 1 forma de fazer
 const primeira = filme.elenco[0]
 console.log("Primeiro ator/atriz: ", primeira)

 const ultimo = filme.elenco[3]    // OU console.log(filme.elenco[filme.elenco.length-1])  
 console.log("Último ator/atriz: ", ultimo)

 // 2 forma de fazer
 console.log("Todas as transmissões: ", filme.transmissoesHoje)

 console.log("Horário da transmissão Canal Brasil: " + filme.transmissoesHoje[1].horario)

