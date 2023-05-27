import logo from './logo.svg';
import './App.css';
import Labs from './labs';
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/labs/*' element= {<Labs />} />
          <Route path='/hello' element= {<HelloWorld />} />
          <Route path='/Tuiter/*' element= {<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
