import { FC } from 'react'
import {
  Grid,
  Stack,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  Heading,
  Box
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IFormInput } from '../../types'
import { useSignUpUserMutation } from '../../store/api/authApi'

const SignUp: FC = () => {
  const [signUpUser, { data, isLoading }] = useSignUpUserMutation()

  console.log('data', data)

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
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signUpUser({ ...data })
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
            Sign Up
          </Heading>
          <Box py='2'>
            <Input
              type='text'
              placeholder='Name'
              {...register('name', {
                required: 'Please enter your name',
                minLength: { value: 3, message: 'Too short' },
                maxLength: 80
              })}
            />
            {errors.name && <AlertPop title={errors.name.message} />}
          </Box>
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

export default SignUp
