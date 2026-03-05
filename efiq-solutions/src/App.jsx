import './App.css'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Stats from './components/Stats'
import Markets from './components/Markets'
import Trusted from './components/Trusted'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root bg-bg min-h-screen">
      <Header />
      <main>
        <Hero />
        <Logos />
        <section className="py-16 bg-panel">
          <div className="container">
            <Stats />
            <h2 className="text-2xl font-bold mt-10 mb-6 font-primary text-white italic border-l-4 border-accent pl-4">Products</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Markets />
          </div>
        </section>

        <section className="py-16 bg-panel">
          <div className="container">
            <Trusted />
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
