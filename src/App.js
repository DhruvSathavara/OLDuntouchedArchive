import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';
import BookList from './components/ListingPage/BookList';
import BookDetail from './components/DetailsPage/BookDetail';
import { APIcontext } from './Web3Storage/Web3Storage';
function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}

      <UploadForm></UploadForm>
      {/* <BookList></BookList> */}
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;
