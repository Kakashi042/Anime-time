
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AnimeDetail from './components/AnimeDetail/AnimeDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/anime/:id' element={<AnimeDetail />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
