import { FC, useState } from 'react'
import {
  Grid,
  Stack,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  Heading,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useSignInUserMutation } from '../../store/api/authApi'
import { Link, useNavigate } from 'react-router-dom'
import { ISignInInput } from '../../types'

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const [signInUser, { isLoading, error, isError, isSuccess }] =
    useSignInUserMutation()

  const AlertPop = ({ title }: string | any) => {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
      </Alert>
    )
  }

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ISignInInput>()

  const onSubmit: SubmitHandler<ISignInInput> = async (data): Promise<void> => {
    setEmail(data.email)
    await signInUser({ ...data })
    isSuccess && navigate('/')
  }

  if ((error as any)?.data.message === 'User Not Verified') {
    navigate('/verify_email', {
      state: { email }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid h='100vh' placeItems='center'>
        <Stack p='10' boxShadow='xl' borderRadius='md' w='md'>
          <Heading
            textAlign='center'
            fontSize='lg'
            fontWeight='semibold'
            color='cyan.500'
          >
            Sign In
          </Heading>
          {isError && <AlertPop title={(error as any).data.message} />}
          <Box py='2'>
            <Input
              type='email'
              placeholder='Email'
              {...register('email', {
                required: 'Please enter your email',
                minLength: { value: 3, message: 'Too short' },
                maxLength: 100
              })}
            />
            {errors.email && <AlertPop title={errors.email.message} />}
          </Box>
          <Box py='2'>
            <Input
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'Please enter Password',
                minLength: { value: 8, message: 'Too short' }
              })}
            />
            {errors.password && <AlertPop title={errors.password.message} />}
          </Box>

          <Flex justify='flex-end'>
            <Text as={Link} to='/forgot_password' color='blue.500'>
              Forgot Password
            </Text>
          </Flex>

          <Button
            isLoading={isLoading}
            borderRadius='md'
            bg='cyan.600'
            _hover={{ bg: 'cyan.200' }}
            variant='ghost'
            type='submit'
          >
            Submit
          </Button>
        </Stack>
      </Grid>
    </form>
  )
}

export default SignIn
