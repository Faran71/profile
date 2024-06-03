import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';
import Contacts from './containers/Contacts';
import CV from './containers/CV';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' 
          element={<MainPage />} 
          key={1}/>
          <Route path='/AboutMe' 
          element={<AboutMe />} 
          key={2}/>
          <Route path='/Projects' 
          element={<Projects />} 
          key={3}/>
          <Route path='/Contacts' 
          element={<Contacts />} 
          key={4}/>
          <Route path='/CV' 
          element={<CV />} 
          key={5}/>

        </Routes>
      </BrowserRouter>
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
