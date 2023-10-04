import FAQ from '../../components/FAQ'
import MainHeader from '../../components/MainHeader'
import Features from '../../components/Program'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'

import './home.css'

const Home = () => {
    return (
        <>
            <MainHeader />
            <Features />
            <Values />
            <FAQ />
            <Testimonials />
        </>
    )
}

export default Home
