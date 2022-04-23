import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";


function App() {


  return (
    <div className="App-main">
      <Router>
        <div >
          <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/coins/:id/' element={<CoinPage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
