import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context'
import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';
import NotFound from './Components/NotFound';

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  
  

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  }, [firebase, setUser])
  return (
    <div>
    
      <Router>
        {/* <Route exact path='/'><Home /></Route>
        <Route path='/signup'><Signup /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/create'><Create /></Route>
        <Route component={NotFound}  /> 
         */}
         <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          
          <Route component={NotFound} />
        </Switch>
        
      
      </Router>
     
    </div>
  );
}

export default App;
