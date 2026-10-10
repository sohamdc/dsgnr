import Header from './sections/Header'
import Hero from './sections/Hero'
import ContactForm from './sections/ContactForm'
import Office from './sections/Office'
import Stats from './sections/Stats'
import Brands from './sections/Brands'
import CtaBanner from './sections/CtaBanner'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <Office />
        <Stats />
        <Brands />
        <CtaBanner />
      </main>
    </>
  )
}

export default App