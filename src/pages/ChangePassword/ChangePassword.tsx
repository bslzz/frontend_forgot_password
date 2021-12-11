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
import { IChangePasswordInput } from '../../types'
import { useChangePasswordMutation } from '../../store/api/authApi'
import { useParams } from 'react-router-dom'

const ChangePassword: FC = () => {
  const { token } = useParams()

  const [changePassword, { isLoading, isError, error }] =
    useChangePasswordMutation()

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
  } = useForm<IChangePasswordInput>()

  const onSubmit: SubmitHandler<IChangePasswordInput> = async (data) => {
    await changePassword({ password: data.password, token: token! })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isError && alert((error as any).data.message)}
      <Grid h='100vh' placeItems='center'>
        <Stack p='10' boxShadow='xl' borderRadius='md' w='md'>
          <Heading
            textAlign='center'
            fontSize='lg'
            fontWeight='semibold'
            color='cyan.500'
          >
            Create New Password
          </Heading>

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
          <Box py='2'>
            <Input
              type='password'
              placeholder='Confirm Password'
              {...register('c_password', {
                required: 'Please enter Password',
                minLength: { value: 8, message: 'Too short' }
              })}
            />
            {errors.c_password && (
              <AlertPop title={errors.c_password.message} />
            )}
          </Box>

          <Button
            borderRadius='md'
            bg='cyan.600'
            _hover={{ bg: 'cyan.200' }}
            variant='ghost'
            isLoading={isLoading}
            type='submit'
          >
            Submit
          </Button>
        </Stack>
      </Grid>
    </form>
  )
}

export default ChangePassword
