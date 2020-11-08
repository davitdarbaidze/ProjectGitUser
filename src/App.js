import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello'
import CounterExample from './CounterExample'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App() {
  //<CounterExample></CounterExample>
  return (
    <div class="relative p-1 pb-10">

      

    {/* rendering the components */}
    <Router> 
      <Header />
      
      <div className='p-3'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />   
          </Route>
          <Route path="/products/:id">
            <Product></Product>
          </Route>
        </Switch>
      </div>

      <Footer></Footer>
    </Router> 

      
    </div>


    
  );
}

export default App;
