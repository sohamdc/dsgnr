import Header from './sections/Header'
import Hero from './sections/Hero'
import ContactForm from './sections/ContactForm'
import Office from './sections/Office'
import Stats from './sections/Stats'
import Brands from './sections/Brands'

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
      </main>
    </>
  )
}

export default App