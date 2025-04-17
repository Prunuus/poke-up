import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/global.css';
import LandingPage from './pages/landing-page/landing-page';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;