import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import LandingPage from "./pages/landing-page/landing-page";
import SignUp from "./pages/sign-up/sign-up";
import Study from './pages/study/study';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/study" element={<Study/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
