import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Tvshows from './pages/Tvshows';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Movies from './pages/Movies';
import News from './pages/News';
import Popular from './pages/Popular';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Tvshows' element={<Tvshows />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/News' element={<News />} />
          <Route path='/Popular' element={<Popular />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
