import piniaPersist from 'pinia-plugin-persist'
import {getActivePinia} from "pinia";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin(nuxtApp => {
	getActivePinia()?.use(piniaPersist)
})
