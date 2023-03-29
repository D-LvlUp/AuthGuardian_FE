import {defineStore} from "pinia";

export const useTenantStore = defineStore('TenantStore', {
	state: () => ({
		TenantName: String,
		API_KEY: String,
		Return_URL: String
	}),
	getters: {
		getReturnUrl: (state:any) => state.Return_URL,
	},
	actions: {
		setTenant(info: any) {
			this.TenantName = info.name
			this.Return_URL = info.Return_URL
		}
	},
})
