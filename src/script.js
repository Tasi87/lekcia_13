// this - odkaz na objekt, s ktorým kód aktuálne pracuje

const person =  {
	firstName:		"Harry",
	secondName:		"Potter",
	introduction:	function () {	//! treba používať function declaration nie expression
		return `Ahoj, moje meno je ${this.firstName} a priezvisko je ${this.secondName}.`;
	}
}

const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
	console.log(this);
});

