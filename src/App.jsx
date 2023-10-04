import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Features from './pages/gallery/gallery'
import Signin from './pages/plans/plans'
import NotFound from './pages/notFound/notfound'
import Navbar from './components/navbar'
import Footer from './components/Footer'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='features' element={<Features />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='signin' element={<Signin />} />
                {/* <Route path='trainers' element={<Trainers />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
