import {About, Navbar, Features, Hero} from "./components/index.js"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </main>
  )
}

export default App