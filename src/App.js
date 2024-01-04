import './App.css';
import Nav from './Nav'
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
