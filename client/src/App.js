import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Routes>
        <Link to={"/"}>Home</Link>
        <Link to={"/otherpage"}>Other Page</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
