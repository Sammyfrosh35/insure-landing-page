import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Services from "./Components/Services"
import Work from "./Components/Work"

export default function App() {
  return (
    <main className="relative">
    <Nav />

 
 <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero />
 </section>
  
<section className="padding">
    <Services />
</section>
  

<section className="padding">
    <Work />
    </section>

<section className="padding-x padding-t pb-8">
    <Footer />
   </section>

   </main>
  )
}