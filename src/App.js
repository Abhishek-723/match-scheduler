import './App.css';
import Forms from './Pages/Forms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Matches from './Pages/Matches';

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <Router>
            <Routes>
                <Route path="/" exact element={<Forms />} />
                <Route path="/matches" exact element={<Matches />} />
            </Routes>
        </Router>
      {/* <Forms /> */}
    </div>
  );
}

export default App;
