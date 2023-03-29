import {APIService} from "@dlvlup/api/dist/ApiService";
import {da} from "vuetify/locale";
import log from '@dlvlup/core/helpers'


class AuthGuardianApi extends APIService {
	constructor(baseUrl: string, api_key?: string) {
		super(baseUrl, api_key);
	}

	//Usable only as handler on Login.
	private setAuth = (data: any) => {
		this.setToken(data.data.token)
		return data
	}

	private editResults = (data: any) => {
		log.info(this.editResults)
		data.data.data.forEach((x: any) => x.active = true)
		return data.data.data
	}

	public login = async (email: string, password: string) => {
		return await this.endpoint('/login').body({
			email: email,
			password: btoa(password)
		}).post([this.setAuth])
	}

	public checkSession = async (id: string, token: string) => {
		this.setToken(token)
		return await this.endpoint(`/Users/${id}`).get<any>()
	}

	public getAllUsers = async () => {
		return await this.endpoint('/Users').get<any>([this.editResults])
	}
}



export default new AuthGuardianApi('http://localhost:8080', '8672fb64-863b-11ed-a1eb-0242ac120002')
