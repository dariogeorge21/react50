import Header from "./components/Header/Header"
import "./App.css"
import  Footer from "./components/Footer/Footer"
import MainContent from "./components/MainContent/MainContent"
import JSXRules from "./components/JSXRules/JSXRules"
import Greeting from "./components/Greeting/Greeting"
import ProductInfo from "./components/ProductInfo/ProductInfo"
import Mapping from "./components/Mapping/Mapping"

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <MainContent />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <Mapping />
      
    </div>
  )
}

export default App
