export default class Schritt{
	constructor(start, ende, istDrinnen, laenge) {
		this.start = start
		this.ende = ende
		this.istDrinnen = istDrinnen
		this.laenge = laenge
	}
	istBegehbar(wegoptionen) {
		return this.istDrinnen || wegoptionen.aussenbereich
	}
}

export class Treppe extends Schritt{
	constructor(start, ende, istDrinnen, laenge){
		super(start, ende, istDrinnen, laenge)
	}
	istBegehbar(wegoptionen) {
		return (this.istDrinnen || wegoptionen.aussenbereich)
		&& wegoptionen.treppen
	}
}

export class Aufzug extends Schritt{
	constructor(start, ende, istDrinnen, laenge, etagen){
		super(start, ende, istDrinnen, laenge)
		this.etagen = etagen
	}
	istBegehbar() {
		return true
	}
}

export class Tuer extends Schritt{
	constructor(start, ende, istDrinnen, laenge, oeffnungszeiten){
		super(start, ende, istDrinnen, laenge)
		this.oeffnungszeiten = oeffnungszeiten
	}

	istGeoeffnet() {
		return true
	}

	istBegehbar(wegoptionen) {
		return (this.istDrinnen || wegoptionen.aussenbereich)
		&& wegoptionen.manTueren
	}
}