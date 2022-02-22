import logo from './logo.svg';
import './App.css';
import { Navbar, Home, News, Tasklist, Createtask, About, Weather, Calendar } from './Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Weather />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/tasklist" element={<Tasklist />} />
          <Route path="/createtask" element={<Createtask />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
