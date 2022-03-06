import logo from './logo.svg';
import './App.css';
import { Navbar, Home, News, Tasklist, Createtask, About, Weather, Calendar,Footer } from './Page';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useStoreState, useStoreRehydrated } from "easy-peasy";
import { createStore, action, useStoreActions } from "easy-peasy";

function App() {

  const loggedIn = useStoreState((state) => state.loggedIn);
  const newUser = useStoreState((state) => state.newuser);


  return (
    <div>
      {/* {loggedIn ? <h1>Yes</h1> : <h1>No</h1>} */}
      <Router>
        <Navbar />
        {/* <Weather /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={loggedIn ? <Navigate to="/tasklist" /> : <Home />}
          />
          <Route
            exact
            path="/news"
            element={<News />}
          />
          <Route
            exact
            path="/tasklist"
            element={<Tasklist />}
          />
          <Route
            exact
            path="/createtask"
            element={<Createtask />}
          />
          <Route
            exact
            path="/calendar"
            element={<Calendar />}
          />
          <Route
            exact
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/weather"
            element={<Weather />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
