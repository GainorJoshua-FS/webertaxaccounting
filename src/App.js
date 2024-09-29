import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <main>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </main>
  );
}

export default App;
