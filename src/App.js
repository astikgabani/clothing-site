import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.routes'
import Navigation from './routes/navigation/navigation.routes'
import Shop from './routes/shop/shop.routes'
import SignIn from './routes/sign-in/sign-in.routes'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  )
}

export default App
