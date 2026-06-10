import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Posts } from './components/sections/Posts'
import { Contact } from './components/sections/Contact'

const App = () => {
    return (
        <div className='min-h-screen bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark'>
            <Navbar />
            <main>
                <Hero />
                <hr className='border-border-light dark:border-border-dark max-w-full py-6'/>

                <Projects />

                <hr className='border-border-light dark:border-border-dark max-w-full py-6'/>

                <Posts />

                <hr className='border-border-light dark:border-border-dark max-w-full py-6'/>
                <Contact />

            </main>
            <Footer />
        </div>
    )
}

export default App
