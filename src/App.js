import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
