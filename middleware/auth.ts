import { IUser } from "~/interfaces/user.interface";
import axios from "axios";
import {useUserStore} from "~/stores/User";
import {defineNuxtRouteMiddleware, navigateTo} from "#app";
import {useToast} from "vue-toastification";
import {useSpinnerStore} from "~/stores/Spinner";
import AuthGuardianApi from "~/services/api/AuthGuardian.api";

const UserStore = useUserStore();
const Spinner = useSpinnerStore();
const Toast = useToast()

export default defineNuxtRouteMiddleware(async (to, from) => {
	Spinner.toggle()
	const user: IUser = UserStore.getUser;
	const token = UserStore.Token
	if(UserStore.getLoginStatus) {
		try {
			await AuthGuardianApi.checkSession(user.id!, token!).then(async response => {
				if(response.data.success) {
					await UserStore.changeAuthState(response.data)
				}
			})
		} catch (e: any) {
			switch (e.request?.status) {
				case 403: Toast.warning(e.response.data.message);
				default: return navigateTo('/login')
			}
		}
	}
	else {
		return navigateTo('/login')
	}
})
