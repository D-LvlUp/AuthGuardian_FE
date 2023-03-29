import {defineNuxtRouteMiddleware, navigateTo} from "#app";

import {useTenantStore} from "~/stores/Tenant";

const Tenant = useTenantStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
	const origin = window.location.origin
	const referrerOrigin = new URL(document.referrer)
	console.log('Window Origin: ' + origin)
	console.log('Referrer Origin: ' + referrerOrigin.origin)

	//TODO: Check if From origin is Authorized Tenant.
	const IsRedirect = to.query['redirect']
	if(IsRedirect) {
		const info = {
			name: 'RedirectApp',
			Return_URL: 'http://localhost:3001/'
		}
		Tenant.setTenant(info)
	}
	else {
		const info = {
			name: 'AuthGuardian',
			Return_URL: 'http://localhost:3000/'
		}
		Tenant.setTenant(info)
	}
})
