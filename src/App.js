import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Weekly from './pages/weekly';
import Popular from './pages/popular';
import Favorites from './pages/favorites';
import NotFound from './pages/notFound';
import './styles/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weekly' element={<Weekly />} />
        <Route path='/popular' element={<Popular />}/>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
