import './App.css';
import {Routes, Route} from 'react-router-dom';
import SwApi from './components/SwApi';

function App() {
  return (
    <div className="App">
      {/* Theater Stage where components will load based upon their routes */}

      <Routes>
          <Route path='/:selectedStar/:personID' element={<SwApi/>}/>
      </Routes>

    </div>
  );
}

export default App;
