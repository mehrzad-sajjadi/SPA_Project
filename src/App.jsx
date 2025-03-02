import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/article/Article";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Article from './pages/article/Article';
import Course from "./pages/course/Course";

function App() {
  return(
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/*" element={<Article />} />
          <Route path='/course/:id' element={<Course />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
