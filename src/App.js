import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
