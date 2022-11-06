import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import {Router, Route,Switch, Redirect } from "react-router-dom";

import Navbar from './navbar';
import Book from './book';
import SingleBook from './singleBooks';
import SearchBar from './searchBar';
class MainComponent extends Component {
 state={
    bookData:""
 }


    render(){
        const {bookData}=this.state
        console.log(bookData);
return (
<div className='container'>
<Router>
<Navbar />
<Switch>
<Route path="/" component = {<Book  bookData={bookData} />}  />
<Route path="/abc" component = {<SearchBar  bookData={bookData} />}/>
<Redirect form="/" to="/books" />
</Switch>
</Router>
</div>
)
    }
}
export default MainComponent;