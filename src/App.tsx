import Header from "./components/Header/Header"
import "./App.css"
import  Footer from "./components/Footer/Footer"
import MainContent from "./components/MainContent/MainContent"
import JSXRules from "./components/JSXRules/JSXRules"
import Greeting from "./components/Greeting/Greeting"
import ProductInfo from "./components/ProductInfo/ProductInfo"
import Mapping from "./components/Mapping/Mapping"
import Person from "./components/Person/Person"


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
      <Footer />
    </div>
  )
}

export default App
