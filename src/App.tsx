import Header from "./components/Header/Header"
import "./App.css"
import  Footer from "./components/Footer/Footer"
import MainContent from "./components/MainContent/MainContent"
import JSXRules from "./components/JSXRules/JSXRules"
import Greeting from "./components/Greeting/Greeting"
import ProductInfo from "./components/ProductInfo/ProductInfo"
import Mapping from "./components/Mapping/Mapping"
import Person from "./components/Person/Person"
import Product from "./components/Product/Product"


const App = () => {

  return (
    <div>
      <Header />
      <MainContent />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <Mapping />
      <Person name="Dario" age={18} />
      <Product name="Lenovo Legion 7" price={75000} />
      <Footer />
    </div>
  )
}

export default App
