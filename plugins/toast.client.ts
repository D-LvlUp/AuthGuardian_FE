import {defineNuxtPlugin} from '#app'
import Toast, {PluginOptions, POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
	position: POSITION.TOP_RIGHT,
	timeout: 3000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: false,
	draggable: true,
	draggablePercent: 0.6,
	showCloseButtonOnHover: true,
	hideProgressBar: false,
	closeButton: "button",
	icon: true,
	rtl: false,
	maxToasts: 5,
	newestOnTop: true
}


export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Toast, options);
})
