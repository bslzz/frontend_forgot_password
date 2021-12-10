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

const ChangePassword: FC = () => {
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
    formState: { errors, isSubmitting }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
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
            isLoading={isSubmitting}
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
