import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header";
import Home from "./views/Home/Home";

export default function App() {
  return (
    // <div className="App">
    //   <div className="top-ar-div">
    //     <Header />
    //   </div>
    // </div>
    <>
      <Router>
        <Route exact path="/" component={<Home />} />
      </Router>
    </>
  );
}
