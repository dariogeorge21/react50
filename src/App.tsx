import Header from "./components/Header/Header"
import "./App.css"
import  Footer from "./components/Footer/Footer"
import MainContent from "./components/MainContent/MainContent"
import JSXRules from "./components/JSXRules/JSXRules"
import Greeting from "./components/Greeting/Greeting"
import ProductInfo from "./components/ProductInfo/ProductInfo"

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <MainContent />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      
    </div>
  )
}

export default App
