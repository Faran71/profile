import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

const ControlPage = () => {
    return(
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<MainPage />} key={1}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ControlPage;