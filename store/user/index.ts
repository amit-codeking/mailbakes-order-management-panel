// import { create } from "zustand";
// import { ErrorAlert, SuccessAlert } from "@/utils/helper";
// import { apis } from "@/services/api/api";
// import { STATUS } from "@/constants";
// import { User } from "@/services/api/interface"


// interface UserDataState {
//   usersData: User[] | null;
 
// }

// export const useUserStore = create<UserDataState>((set, get) => ({
//   adminData: null,
//   usersData: null,
//   isLogedin: false,
//   userDetail: {},

//   userDetailStatus: STATUS.NOT_STARTED,
//   adminLoginStatus: STATUS.NOT_STARTED,
//   allUsersStatus: STATUS.NOT_STARTED,
//   updateUserStatus: STATUS.NOT_STARTED,

//   resetLoginStatus: () => set({ adminLoginStatus: STATUS.NOT_STARTED }),


//   adminLoginAction: async (payload, isAlert) => {
//     set({ adminLoginStatus: STATUS.FETCHING });
//     const { data, ok, originalError }: any = await apis.adminLoginApi(payload);
//     if (ok) {
//       set({ adminLoginStatus: STATUS.SUCCESS, adminData: data.user, isLogedin: true });
//       if (isAlert) SuccessAlert(data.msg || "Login Successfully!");
//     } else {
//       set({ adminLoginStatus: STATUS.NOT_STARTED });
//       ErrorAlert(data?.errorMessage || originalError.message);
//       // setAuthorizationHeader(null);
//       // localStorage.removeItem(LOCAL_STORAGE_KEYS.loginToken);
//       set({ adminData: null, adminLoginStatus: STATUS.FAILED });
//     }
//   },

//   checkLoginAction: async () => {
//     set({ adminLoginStatus: STATUS.FETCHING });
//     const { data, ok, originalError }: any = await apis.checkLoginApi();
//     if (ok) {
//       set({ adminLoginStatus: STATUS.SUCCESS, adminData: data.user, isLogedin: true });
//     } else {
//       set({ adminLoginStatus: STATUS.NOT_STARTED });
//       ErrorAlert(data?.errorMessage || originalError.message);
//       set({ adminData: null, adminLoginStatus: STATUS.FAILED, isLogedin: false });
//     }
//   },

//   getAllUsersAction: async () => {
//     set({ allUsersStatus: STATUS.FETCHING })
//     const { data, ok, originalError }: any = await apis.getAllUserApi();
//     if (ok) {
//       set({ allUsersStatus: STATUS.SUCCESS, usersData: data.users });
//     } else {
//       set({ allUsersStatus: STATUS.NOT_STARTED });
//       ErrorAlert(data?.errorMessage || originalError.message);
//       // setAuthorizationHeader(null);
//       // localStorage.removeItem(LOCAL_STORAGE_KEYS.loginToken);
//       set({ usersData: null, allUsersStatus: STATUS.FAILED });
//     }
//   },

//   getUserDetailAction: async (payload) => {
//     set({ allUsersStatus: STATUS.FETCHING })
//     const { data, ok, originalError }: any = await apis.getUserDetailApi(payload);
//     if (ok) {
//       set({ allUsersStatus: STATUS.SUCCESS, userDetail: data });
//     } else {
//       set({ allUsersStatus: STATUS.NOT_STARTED });
//       ErrorAlert(data?.errorMessage || originalError.message);
//       // setAuthorizationHeader(null);
//       // localStorage.removeItem(LOCAL_STORAGE_KEYS.loginToken);
//       set({ usersData: null, allUsersStatus: STATUS.FAILED });
//     }
//   },

//   updateUserAction: async (payload) => {
//     set({ updateUserStatus: STATUS.FETCHING });
//     const { data, ok, originalError }: any = await apis.updateUserApi(payload);
//     if (ok) {
//       SuccessAlert(data?.msg || "Payment Method updated successfully");
//       set((state) => ({
//         userDetail: { ...state, user: { ...data } }
//       }));

//     } else {
//       ErrorAlert(data?.errorMessage || originalError.message || "Failed to update payment method");
//       set({ updateUserStatus: STATUS.FAILED });
//     }
//   }






// }));