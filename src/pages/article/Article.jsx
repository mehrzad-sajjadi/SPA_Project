import { BrowserRouter,Routes,Route,Link,useLocation  } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from "../../components/Header";
function Article(){
    return(
        <>
            <Header></Header>
            <h1 className="py-4 text-center ">صفحه مقالات</h1>
            <hr />
            <div className='flex justify-center py-5'>
                <Button className='mx-2' >
                    <Link to="php" relative='path' className="text-white no-underline">php</Link>
                </Button>
                <Button className='mx-2'><Link to="js" relative='path' className="text-white no-underline">JavaScript</Link></Button>
                <Button className='mx-2'><Link to="React" relative='path' className="text-white no-underline">React</Link></Button>
            </div>
            <Routes>
                <Route path='php' element={<h2 className='text-center'>php article</h2>} />
                <Route path='js' element={<h2 className='text-center'>Javascript article</h2>} />
                <Route path='React' element={<h2 className='text-center'>React article</h2>} />
            </Routes>        
        </>
    )
}
export default Article;