import {DataModel, actions} from 'bg-use-cases/db';
console.log("🚀 ~ file: clinics-collection.ts:2 ~ DataModel:", DataModel)

export /*actions*/ /*bundle*/
class ClinicsCollectionBridge {
	_model;

	constructor() {
		this._model = DataModel.models.Clinics;
	}

	list(params) {
		return actions.list(this._model, params, '/clinics/list');
	}

	bulkSave(params) {
		return actions.bulkSave(this._model, params, '/clinics/bulkSave');
	}
}
