import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";


function App() {

  return (
    <div className={App}>
      <Router>
        <div>
          <Header />

        <Routes>
          <Route exact path="/dashboard" element={<HomePage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
