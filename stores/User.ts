
export const useUserStore = defineStore('UserStore', {
	state: () => ({
		User: null,
		IsLoggedIn: false,
		Token: null
	}),
	getters: {
		getUser: (state): any => state.User,
		getToken: (state: any): any => state.Token,
		getLoginStatus: (state: any): boolean => state.IsLoggedIn
	},
	actions: {
		async changeAuthState(data: any) {
			if (data.data) {
				this.User = {...data.data}
				this.IsLoggedIn = true
				this.Token = data.token
			}
			else {
				this.User = null;
				this.IsLoggedIn = false;
			}
		}
	},
	persist: {
		enabled: true
	}
})
