import CampusLife from "../components/CampusLife"
import CareerPathSlider from "../components/CareerPathSlider"
import HeroSlider from "../components/HeroSlider"
import OurPartners from "../components/OurPartners"
import OurTeamSlider from "../components/OurTeamSlider"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <CareerPathSlider />
      <OurTeamSlider />
      <OurPartners />
      <CampusLife />
    </>
  )
}

export default Home