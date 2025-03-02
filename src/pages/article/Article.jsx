import { Routes,Route,Link ,Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from "../../components/Header";
function Article(){
    const routes = {
        php:{
            path :"/article/php",
        },
        js:{
            path :"/article/js",
        },
        react:{
            path :"/article/react",
        },
    };

    return(
        <>
            <Header></Header>
            <h1 className="py-4 text-center ">صفحه مقالات</h1>
            <hr />
            <div className='flex justify-center '>
                <Button className='mx-2' >
                    <Link to='/article/php' className="text-white no-underline">php</Link>
                </Button>
                <Button className='mx-2'>
                    <Link to='/article/js' className="text-white no-underline">JavaScript</Link>
                </Button>
                <Button className='mx-2'>
                    <Link to='/article/react' relative='path' className="text-white no-underline">React</Link>
                </Button>
            </div>

            {/* <div className='flex justify-center py-5'>
                <Link to='/article/php' >    php         </Link>
                <Link to='/article/js'  >    JavaScript  </Link>
                <Link to='/article/react'>   React       </Link>
            </div> */}
            <hr />
            <Routes>
                <Route path='php' element={<h2 className='text-center'>php article</h2>} />
                <Route path='js' element={<h2 className='text-center'>Javascript article</h2>} />
                <Route path='react' element={<h2 className='text-center'>React article</h2>} />
            </Routes>        
        </>
    )
}
export default Article;