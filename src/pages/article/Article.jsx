import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from "../../components/Header";

function Article(){
    return(
        <>
            <Header></Header>
            <h1 className="py-4 text-center ">صفحه مقالات</h1>
            <hr />
            <Routes>
                <Route path='php' element={<h2 className='text-center'>php article</h2>} />
            </Routes>        
        </>
    )
}
export default Article;