import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'
import { ISignInInput, IUser } from '../../types'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body: IUser) => ({
        url: 'users/signup',
        method: 'POST',
        body
      })
    }),

    signInUser: builder.mutation({
      query: (body: ISignInInput) => ({
        url: 'users/login',
        method: 'POST',
        body
      })
    }),
    sendVerificationEmail: builder.mutation({
      query: (body: { email: string }) => ({
        url: '/send_verification_email',
        method: 'POST',
        body
      })
    }),
    verifyEmail: builder.mutation({
      query: (body: { token: string }) => ({
        url: '/verify_email',
        method: 'POST',
        body
      })
    }),
    forgotPassword: builder.mutation({
      query: (body: { email: string }) => ({
        url: '/forgot_password_verification',
        method: 'POST',
        body
      })
    }),
    changePassword: builder.mutation({
      query: (body: { token: string; password: string }) => ({
        url: '/verify_password',
        method: 'POST',
        body
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useSendVerificationEmailMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation
} = authApi
