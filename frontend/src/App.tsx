import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/global.css';
import LandingPage from './pages/landing-page/landing-page';
import Study from './pages/study/study';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/study" element={<Study/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;