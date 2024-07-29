import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Mywork from './Components/Mywork';
import Submission from './Components/Submission';



function App() {
  return (

    
<><Routes>

<Route path="/" element={<Home/>}></Route>

 <Route path='/myworks' element={<Mywork/>}/>
 <Route path='/thankyou' element={<Submission/>}/>
</Routes>

</>


  );
}

export default App;
