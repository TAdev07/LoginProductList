import axios from 'axios';
import * as Config from './../constants/config';

export default function callAPI(endpoint, method = 'GET', body, params){
	return	axios({
			method: method,
			url : `${Config.API_URL}/${endpoint}`,
			data : body,
			headers: params
		});
	}
