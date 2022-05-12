import './App.css';
import {Routes, Route} from 'react-router-dom';
import SwApi from './components/SwApi';
import Error from './components/Error';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* Theater Stage where components will load based upon their routes */}
      <Form/>
      <Routes>
          <Route path='/:selectedStar/:personID' element={<SwApi/>}/>
          <Route path="/error" element={<Error/>}/>
      </Routes>

    </div>
  );
}

export default App;
