import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Courses from './Components/Courses';
import EnquiryDetails from './Components/EnquiryDetails';
import Form from './Components/Form';
import Header from './Components/Header';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<Courses/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/enquirydetails' element={<EnquiryDetails/>}/>
        </Routes>
      </section>
    </Router>
    </>
  )
}

export default App;
