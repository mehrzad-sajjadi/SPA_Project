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
            <div className='flex justify-center '>
                
            </div>

            {/* <div className='flex justify-center py-5'>
                <Link to='/article/php' >    php         </Link>
                <Link to='/article/js'  >    JavaScript  </Link>
                <Link to='/article/react'>   React       </Link>
            </div> */}
            <hr />
      
        </>
    )
}
export default Article;