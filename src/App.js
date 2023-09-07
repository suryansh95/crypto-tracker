
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles (() => ({
  App: {
backgroundColor: "#14161a",
color : 'white',
minHeight : '100vh', 
},
}));


function App() {  

const classes = useStyles();

 return (

 <Router>
   <div className={classes.App}>
<Header  />
   <Switch>
   <Route exact path = "/" component={Homepage}/> 
   <Route exact path = "/coins/:id" component={CoinPage} />
   </Switch>
   </div>
</Router>
  );
}

export default App;
