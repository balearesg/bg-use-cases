import { DBManager } from '@beyond-js/reactive/database';
import config from 'bg-use-cases/config';

const dbName = config.params.application.localDB;
const dbVersion = config.params.application.localDBVersion;

async function inializeApp() {
	try {
		const db = await DBManager.config(`${dbName}@${dbVersion}`, {
			census: 'id',
			clinics: 'id',
			contacts: 'id',
			'beneficiary-types': 'id',
			'address-types': 'id',
			'civil-status': 'id',
			disabilities: 'id',
			'document-types': 'id',
			nationalities: 'id',
			provinces: 'id',
			relatives: 'id',
			'review-situations': 'id',
			'validates-cuils': 'id',
			'requests-types': 'id',
			requests: 'id',
			'requests-states': 'id',
			'audit-requests': 'id',
			'requests-comments': 'id',
			users: 'id',
			permissions: 'id',
			profiles: 'id',
			modules: 'id',
		});

	} catch (e) {
		console.error('error', e);
	}
}

inializeApp();
