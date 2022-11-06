import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import axois  from "axios";
import queryString from "query-string"
import ShowOptions from './showOptions';
class SearchBar extends Component {
 state={
  
 }

    handleSumbit=(search)=>{
      
        console.log("in handle person ",search);
        let s1={...this.state}
        s1.bookData=search
        this.props.history.push("/books")
        this.setState(s1)
    }


    render(){
        const {bookData}=this.props
        let queryParams=queryString.parse(this.props.location.search)
        console.log(queryParams);
  
return (
<div className='container'>
<div className='row'>
<ShowOptions  options={{}}  onSumbit={this.handleSumbit} />
</div>
</div>
)
    }
}
export default SearchBar;