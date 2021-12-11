import { Button, Grid, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { defaultState } from '../../store/features/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/ts_hooks'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { name } = useAppSelector((state) => state.auth)

  const logOut = () => {
    localStorage.removeItem('token')
    dispatch(defaultState())
    navigate('/signin')
  }
  return (
    <Grid>
      <Heading>Welcome {name}</Heading>
      <Button onClick={logOut}>Log Out</Button>
    </Grid>
  )
}

export default Home
