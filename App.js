import SignIN from './SignIn';
import Login from './Login';
import Home from './Home';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Auth from "./Auth";

function App() {
  return (
    <main className='App'>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignIN />} />
        <Route path='/login' element={<Login />} />
        <Route path="/Auth"  element={< Auth/>}></Route>
      </Routes>
    </main>
  
  );
}

export default App;
