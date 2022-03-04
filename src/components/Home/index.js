import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => {
  console.log('this is an home component')

  return (
    <>
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </>
  )
}

export default Home
