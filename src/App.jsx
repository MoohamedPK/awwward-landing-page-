import {About, Navbar, Features, Hero, Story} from "./components/index.js"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <div className="h-screen bg-white"></div>
    </main>
  )
}

export default App