import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import Popup from './components/Popup';
import Browse from './pages/Browse';
import SearchResults from './pages/SearchResults'
import BrowseByGenre from './pages/BrowseByGenre';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';




function App() {
  
  return (
   <BrowserRouter>
   <Navigation/>
   
  
   
   <Routes>
   <Route path="/signup" element={<SignUp/>} />
     <Route path="/signin" element={<SignIn/>} />
   
    <Route path="/" element={<HomeScreen/>}></Route>
    <Route path ='/browse/:platform' element={<Browse/>}></Route>
    <Route path='/browsebygenre/:platform/:id' element={<BrowseByGenre />}></Route>
    <Route path='/search' element={<SearchResults />}></Route>
    </Routes>

    
    <Popup/>    
    </BrowserRouter>
  );
}

export default App;
