import {defineStore} from "pinia";

export const useSpinnerStore = defineStore('SpinnerStore', {
	state: () => ({
		IsToggled: false
	}),
	getters: {
		getSpinner: (state): any => state.IsToggled,
	},
	actions: {
		toggle() {
			if(!this.IsToggled)
				this.IsToggled = !this.IsToggled
		},
		untoggle() {
			if (this.IsToggled)
				this.IsToggled = !this.IsToggled
		}
	},
})
