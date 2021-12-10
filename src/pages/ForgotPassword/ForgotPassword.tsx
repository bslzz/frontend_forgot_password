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

const ForgotPassword: FC = () => {
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
            Order New Password
          </Heading>

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

          <Button
            borderRadius='md'
            bg='cyan.600'
            _hover={{ bg: 'cyan.200' }}
            variant='ghost'
            type='submit'
            isLoading={isSubmitting}
          >
            Send
          </Button>
        </Stack>
      </Grid>
    </form>
  )
}

export default ForgotPassword
