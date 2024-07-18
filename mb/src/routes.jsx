import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Pesquisa from './pages/Pesquisa'
import Home from './pages/Home'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>      
                <Route path='/Pesquisa/:q' element={<Pesquisa/>}     />
            </Routes>
        </BrowserRouter>
    )
}


