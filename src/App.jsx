import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/article/Article";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Article from './pages/article/Article';
import Course from "./pages/course/Course";
import { Button } from 'react-bootstrap';

function App() {
  return(
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/*" element={<Article />} >
            <Button className='mx-2' >
                <Link to='/article/php' className="text-white no-underline">php</Link>
            </Button>
            <Button className='mx-2'>
                <Link to='/article/js' className="text-white no-underline">JavaScript</Link>
            </Button>
            <Button className='mx-2'>
                <Link to='/article/react' relative='path' className="text-white no-underline">React</Link>
            </Button>
          </Route>
          <Route path='/course/:id' element={<Course />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
