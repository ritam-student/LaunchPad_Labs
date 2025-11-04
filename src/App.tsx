import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Pricing from './components/Pricing'
import Founder from './components/Founder'
import BookCall from './components/BookCall'
import Layout1 from './components/Layout1'
import VisionDetails from './components/VisionDetails'
import Visions from './components/Visions'

function App() {

  return (
    <div className='w-full h-auto min-h-screen'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/founder' element={<Founder />} />
          <Route path='/book-a-call' element={<BookCall />} />
        </Route>

        <Route element={<Layout1 />}>
          <Route path='/visions' element={<Visions />} />
          <Route path='/case-study' element={<VisionDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
