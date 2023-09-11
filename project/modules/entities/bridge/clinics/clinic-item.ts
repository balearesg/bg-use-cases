import {DataModel, actions} from 'bg-use-cases/db';

export /*actions*/ /*bundle*/
class ClinicItemBridge {
	_model;

	constructor() {
		this._model = DataModel.models.Clinics;
	}
	data(params) {
		return actions.data(this._model, params, '/clinic/data');
	}

	publish(params) {
		return actions.publish(this._model, params, '/clinic/publish');
	}

	remove(params) {
		return actions.remove(this._model, params, '/clinic/remove');
	}
}
