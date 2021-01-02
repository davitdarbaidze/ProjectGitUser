import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Views/About'
import UserPage from './Components/userPage'
import GridList from './Components/GridList'




function App() {
  //<CounterExample></CounterExample>
  return (
    <div className="relative p-1 pb-10">

      

    {/* rendering the components */}
    <Router> 
      <Header />
      
      <div className='p-3'>
        <Switch>
          <Route exact path="/">
            <GridList></GridList>
          </Route>
          <Route path="/about">
            <About />   
          </Route>

          <Route path="/Landing">
            
            
          </Route>
          <Route path="/:login">
            <UserPage />
          </Route>
        </Switch>
      </div>

      <Footer></Footer>
    </Router> 

      
    </div>


    
  );
}

export default App;
