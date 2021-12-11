import { Grid, Heading, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSendVerificationEmailMutation } from '../../store/api/authApi'

const SendEmail = () => {
  const { state } = useLocation()
  const [sendVerificationEmail, { isLoading, isError, error }] =
    useSendVerificationEmailMutation()

  useEffect(() => {
    sendVerificationEmail({ email: state?.email })
  }, [sendVerificationEmail, state?.email])

  if (isError) {
    alert((error as any).data.message)
  }

  return isLoading ? (
    <Grid h='100vh' placeItems='center'>
      <Spinner />
    </Grid>
  ) : (
    <Grid h='100vh' placeItems='center'>
      <Heading>Email Sent</Heading>
    </Grid>
  )
}

export default SendEmail
