import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  );
}

export default App;