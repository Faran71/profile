import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route>
          <Route path='/' 
          element={<MainPage />} 
          key={1}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <MainPage />
    </div>
  );
}

export default App;
