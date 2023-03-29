// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: 'AuthGuardian',
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=yes' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			],
			script: [
			]
		},
		pageTransition: { name: 'fade', mode: 'out-in' },
		layoutTransition: { name: 'fade', mode: 'out-in'}
	},
	plugins: [
		'~/plugins/pinia-persist.client',
		'~/plugins/toast.client',
		'~/plugins/vuetify.client'
	],
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css'
	],
	build: {
		transpile: ['vuetify'],
	},

	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: [
					'defineStore', // import { defineStore } from 'pinia'
					['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
				],
			},
		],
	],


	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/style.scss";',
				},
			},

		},
	},

})
