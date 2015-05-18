export default class Ort{
  constructor(beschreibung, oeffnungszeiten, position) {
    this.beschreibung = beschreibung
    this.oeffnungszeiten = oeffnungszeiten
    this.position = position
  }
  istGeoeffnet() {
    return true
  }
}
