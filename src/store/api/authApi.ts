import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => ({
        url: 'users/signup',
        method: 'POST',
        body
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpUserMutation } = authApi
