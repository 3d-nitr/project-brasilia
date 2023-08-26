import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
