import Profile from './Component/Profile'
import './App.css'
import Header from './Component/Header'
import Navigation from './Component/Nav'
import History from './Component/History'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from './Component/Review';
import Carousel from './Component/Carousel';
import TikTakToe from './Component/TikTakToe';
import Pagination from './Component/Pagination';
import Todo from './Component/Todo';
import Default from './Component/Default';
import Playground from './Component/Playground';
import AccordianMain from './SubComponents/AccordianMain';


function App() {

    return (
    <>  
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path='/' element={<History/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/history' element={<History />}></Route>
                <Route path='/review' element={<Review />}></Route>
                <Route path='/carousel' element={<Carousel />}></Route>
                <Route path='/game' element={<TikTakToe />}></Route>
                <Route path='/pagination' element={<Pagination />}></Route>
                <Route path='/todo' element={<Todo />}></Route>
                <Route path='/playground' element={<Playground />}></Route>
                <Route path='/accordian' element={<AccordianMain />}></Route>
                <Route path="*" element={<Default />}></Route>
            </Routes>
            {/* <Footer /> */}
        </Router>
    </>
    )
}

export default App
