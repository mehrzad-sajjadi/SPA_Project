import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";



function App() {
  return(
    <>  
      <h1>نکست وان کد</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
