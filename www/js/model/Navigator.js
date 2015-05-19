import Schritt from './Schritt.js'
import Weg from './Weg.js'
import Position from './Position.js'

export default class Navigator {
	constructor(karte){
		this.karte = karte
	}
	static naechsterSchritt(navigation){
		return new Schritt(navigation.position, new Position(10.0, 10.0, 1), true, 3.0)
	}
	static wegVorschlagen(navigation){
		return new Weg([
			new Schritt(navigation.position, new Position(10.0, 10.0, 1), true, 3.0),
			new Schritt(new Position(10.0, 10.0, 1), new Position(20.0, 20.0, 1), true, 14.1)])
	}
}
