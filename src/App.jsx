import LogoSection from "./components/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
    </>
  )
}

export default App