export default class Weg{
	constructor(schritte) {
		this.schritte = schritte
	}
	//Prueft, ob jeder Schritt begehbar ist
	istBegehbar(wegoptionen) {
		return this.schritte.every(schritt =>
		 schritt.istBegehbar(wegoptionen))
	}
	laenge() {
		return this.schritte.reduce((s1, s2) =>
			{return s1.laenge + s2.laenge}, 0)
	}
}
