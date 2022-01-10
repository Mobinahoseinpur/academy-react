import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Bahr_Ac from './containers/Bahr_Ac';
//import Landing from '../src/containers/LandingPage'
const App = () => {
    return ( 
          <BrowserRouter>
             <Bahr_Ac/>
          </BrowserRouter>
        
     );
}
 
export default App;
