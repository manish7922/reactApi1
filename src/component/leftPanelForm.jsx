import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";

class LeftPanelForm extends Component {
 state={
 }

 handleChange=(e)=>{
    // console.log(e.currentTarget);
    const {currentTarget:input}=e
let options={...this.props.opions};
options[input.name]=input.value;
this.props.onOptionChange(options)
 }


 makeDropdown=(arr,value,name,label)=>(


    <div className='from-group'>
        <select className='from-control' style={{padding:"0.2rem 4rem"}} name={name} value={value} onChange={this.handleChange}>
            <option value="">{label}</option>
            {arr.map((opt)=>(
                <option>{opt}</option>
            ))}
        </select>
    </div>

)
showRadios=(arr,values,name,label)=>(
<>
    <label className="form-check-label font-weight-bold ">{label}</label>
           {arr.map((opt)=>(
    <div className='form-check  border m-2'>
<input  className="form-check-input" type="radio" name={name} value={opt} checked={values===opt} onChange={this.handleChange} />   
<label className="form-check-label">{opt}</label>
</div>
))} 
 </> 
)
    render(){
        const{language="",filter="",printType="",orderBy=""}=this.props.options
        let {Languages,Filter,PrintType,Order}=this.props;
        console.log(Languages);
return (

<div className="row">
        <div className="col-12 m-1">
        { this.showRadios(Languages,language,"language","language")}
        </div>
        <div className="col-12 m-1">
        { this.showRadios(Filter,filter,"filter","Filter")}
        </div>
        <div className="col-12 m-1">
        { this.showRadios(PrintType,printType,"printType","PrintType")}
        </div>
    {/* <div className="col-12 m-1">
    {Language.map((d)=>(
        <>
        <div className='form-check form-check-inline'>
    <input  className="form-check-input" type="radio" name="language" value={d} checked={language===d} onChange={this.handleChange} />   
   <label className="form-check-label">{d}</label>
    </div>
    </>
    ))}
</div> */}


<div className="col-12 m-1">
        { this.makeDropdown(Order,orderBy,"orderBy","orderBy")}
        </div>
        </div>

)
    }
}
export default LeftPanelForm;