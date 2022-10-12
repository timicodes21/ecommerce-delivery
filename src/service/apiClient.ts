import { AnyAction, EnhancedStore } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkMiddleware } from "redux-thunk";
// import { store } from "../app/store";

// let apiBaseUrl: string | undefined = "";

// const env: string = process.env.NODE_ENV;

// switch (env) {
//   case "local":
//     apiBaseUrl = process.env.NEXT_PUBLIC_API_AUTH_BASE_URL;
//     break;

//   case "development":
//     apiBaseUrl = process.env.NEXT_PUBLIC_API_AUTH_BASE_URL;
//     break;
//   case "production":
//     apiBaseUrl = process.env.NEXT_PUBLIC_API_AUTH_BASE_URL;
//     break;
//   default:
//     apiBaseUrl = "";
// }

// const apiClient = axios.create({
//   baseURL: apiBaseUrl,
//   withCredentials: false,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// let store: EnhancedStore<
//   {
//     auth: AuthState;
//   },
//   AnyAction,
//   [
//     ThunkMiddleware<
//       {
//         auth: AuthState;
//       },
//       AnyAction,
//       undefined
//     >
//   ]
// >;

// export const injectStore = (
//   _store: EnhancedStore<
//     {
//       auth: AuthState;
//     },
//     AnyAction,
//     [
//       ThunkMiddleware<
//         {
//           auth: AuthState;
//         },
//         AnyAction,
//         undefined
//       >
//     ]
//   >
// ) => {
//   store = _store;
// };

// Interceptor to attch authkey to request headers
// apiClient.interceptors.request.use(function (config: any) {
//   const token = store.getState().auth.authToken
//     ? store.getState().auth.authToken
//     : "";
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// Interceptor to refresh user token if expired
// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch(
//         refreshUserToken({
//           data: { oldRefreshToken: store.getState().auth.refreshToken },
//           nextAction: () => {
//             return apiClient(originalRequest);
//           },
//         })
//       );
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
