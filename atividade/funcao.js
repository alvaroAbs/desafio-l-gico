let userName = getFirstName ("Alvaro-Antonio-Batista de Sousa")

console.log (" Welcome, " + userName)

function getFirstName(name){
	let firstname = name.split("splitChar")[0]
    return firstname
}