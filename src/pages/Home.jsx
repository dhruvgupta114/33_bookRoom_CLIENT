import "./Home.css"
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Featured from "../Components/Featured"
import PropertyList from "../Components/PropertyList"
import FeaturedProperties from "../Components/FeaturedProperties"
import MailList from "../Components/MailList"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home