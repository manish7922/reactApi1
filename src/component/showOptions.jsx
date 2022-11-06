import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";

class ShowOptions extends Component {
 state={

 
 }
 handleChange=(e)=>{
    const {currentTarget:input}=e
    console.log(e);
    let s1={...this.props};
    s1.options[input.name] = input.value;
    this.setState(s1)
    }
    handleSumbit=(e)=>{
        e.preventDefault();
        this.props.onSumbit(this.props.options)
        }

    render(){
const {searchText=""}=this.props.options
  
return (
<div className='container'>
<div className='row'>
<div className='col-3'></div>
<div className='col-6'>
<div className='form-group'>
        <input type="text" className="form-control" id="searchText" name="searchText" value={searchText}  onChange={this.handleChange} />
</div>
<button className='btn btn-primary btn-sm'onClick={this.handleSumbit}>Search</button>
</div>
<div className='col-3'></div>
</div>
</div>
)
    }
}
export default ShowOptions;