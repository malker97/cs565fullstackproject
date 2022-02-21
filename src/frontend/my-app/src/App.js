import logo from './logo.svg';
import './App.css';
import {Navbar, Home, News, Tasklist, Createtask, About} from './Page';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/tasklist" element={<Tasklist/>} />
        <Route path="/createtask" element={<Createtask/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
