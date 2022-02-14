import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header";
import Home from "./views/Home/Home";

export default function App() {
  console.log(Home);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
