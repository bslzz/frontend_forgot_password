import { Grid, Heading, Spinner, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useVerifyEmailMutation } from '../../store/api/authApi'

const EmailVerify = () => {
  const { token } = useParams()

  const [verifyEmail, { isLoading, isError }] = useVerifyEmailMutation()

  useEffect(() => {
    token && verifyEmail({ token })
  }, [verifyEmail, token])

  return isLoading ? (
    <Grid h='100vh' placeItems='center'>
      <Spinner />
    </Grid>
  ) : (
    <Grid h='100vh' placeItems='center'>
      {isError ? (
        <Text>Email Verification Failed! Please try again!</Text>
      ) : (
        <Heading>Email verified</Heading>
      )}
    </Grid>
  )
}

export default EmailVerify
