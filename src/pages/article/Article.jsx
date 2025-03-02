import { Routes,Route,Link  } from 'react-router-dom';
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
            {/* <div className='flex justify-center py-5'>
                <Button className='mx-2' >
                    <Link to={routes.php.path} className="text-white no-underline">php</Link>
                </Button>
                <Button className='mx-2'>
                    <Link to={routes.js.path} className="text-white no-underline">JavaScript</Link>
                </Button>
                <Button className='mx-2'>
                    <Link to={routes.react.path}  relative='path' className="text-white no-underline">React</Link>
                </Button>
            </div> */}

            <div className='flex justify-center py-5'>
                <Link to='php' >    php         </Link>
                <Link to='js'  >    JavaScript  </Link>
                <Link to='react'>   React       </Link>
            </div>

            <Routes>
                <Route path='php' element={<h2 className='text-center'>php article</h2>} />
                <Route path='js' element={<h2 className='text-center'>Javascript article</h2>} />
                <Route path='react' element={<h2 className='text-center'>React article</h2>} />
            </Routes>        
        </>
    )
}
export default Article;