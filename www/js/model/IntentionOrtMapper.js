export default class IntentionOrtMapper{
	constructor(map){
		this.map = map
	}

	findeOrte(intention){
		return this.map.get(intention)
	}
}
