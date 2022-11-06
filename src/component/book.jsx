import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import queryString from "query-string"
import axois  from "axios";
import http from "./httpService"
import SingleBook from './singleBooks';
import LeftPanelForm from './leftPanelForm';
class Book extends Component {
 state={
    data:{},
    Languages:["English","French","Hindi","Spanish","Chinese"],
    Filter:["Full volume","Partial Volume","Free Googlee-Books","Paid Googlee-Books"],
    PrintType:["All","books","magazines"],
    Order:["relevance","newest"],
    startIndex:0,
    maxResults:10,
}
async fetchData() {
    let query ="";
let searchText="";
let startIndex="";
let maxResults="";
let  language="";
let orderBy="";
let printType="";
let filter="";
// let response=await axois.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+searchText:${searchText}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=${language}&orderBy=${orderBy}&printType=${printType}&filter=${filter}`)
    let response= await axois.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${this.props.bookData}&startIndex=0&maxResults=40`)
    console.log(response)
    let {data}=response;
    this.setState({data:data})
 }

 componentDidMount() {
    this.fetchData();
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps!==this.props) this.fetchData();
        }
        handleOptinChange=(options)=>{
            this.callURL("/books",options)  
        }

        filterParams=(arr,queryParams)=>{
            let {language,filter,printType}=queryParams
         if(!language) return arr;
         arr=this.filterParam(arr,"language",language)
         arr=this.filterParam(arr,"filter",filter)
         arr=this.filterParam(arr,"printType",printType)

         return arr;
         }
         filterParam=(arr,name,values)=>{
            if(!values) return arr;
            let valuesArr=values.split(",")
           let arr1= arr.filter(a1=>valuesArr.find(val=>val===a1[name]))
            return arr1;
         }
         handlePage=(incr)=>{
            let querParams=queryString.parse(this.props.location.search)
            let searchStr=this.makeSearchString(querParams)
         
            let {page="1"}=querParams
        // console.log("Page",page);
            let newPage=+page+incr;
            // console.log("newPage",newPage);
            querParams.page=newPage;
            // this.callUrl(`/emps/${location}`,querParams) 
            this.callURL("/books",querParams) 
      
        }

        
        callURL=(url,options)=>{
            let searchString=this.makeSearchString(options);
            this.props.history.push({
                pathName:url,
                search:searchString,
            })
        }
  
        
        makeSearchString=(options)=>{
            let {page,language,filter,printType,orderBy}=options;
            let searchStr="";
            searchStr=this.addToQueryString(searchStr,"page",page)
            searchStr=this.addToQueryString(searchStr,"language",language)
            searchStr=this.addToQueryString(searchStr,"filter",filter)
            searchStr=this.addToQueryString(searchStr,"printType",printType)
            searchStr=this.addToQueryString(searchStr,"orderBy",orderBy)
            console.log(searchStr);
            return searchStr;
        }
        
        addToQueryString=(str,parmaNaame,paramValue)=>
        paramValue ? str ? `${str}&${parmaNaame}=${paramValue}` : `${parmaNaame}=${paramValue}`:str;

        render(){

const {Languages,Filter,PrintType,Order}=this.state        
const {items=[]}=this.state.data
console.log(items);
let queryParams=queryString.parse(this.props.location.search)
console.log(queryParams);
const {page="1"}=queryParams;
const {startIndex1="1"}=queryParams
// let itmes2=items.volumeInfo;
let items1=this.filterParams(items,queryParams) 
let pageNum=+page;
let size=4;

//   console.log("pageno=",pageNum);
let startIndex=(pageNum-1)*size;
let maxResults=items1.length> (startIndex+size-2) ? startIndex+size-1+1 : items1.length-1
let itmes2= items1.length>1 ?  items1.filter((lt,index)=>index>= (startIndex) && index<=maxResults):items1
console.log("items1",items);
return (
<div className='container'>
<div className='row'>
<div className='col-3'>
<LeftPanelForm  options={queryParams}  Languages={Languages} Filter={Filter} PrintType={PrintType} Order={Order} onOptionChange={this.handleOptinChange} />
</div>
<div className='col-9'>
<div className='row'>
{itmes2.map((book)=>(
    <>
    <div className='col-3 bg-success border text-center'>
    <img className='' src={book.volumeInfo.imageLinks?.thumbnail} alt='' />
    <p className='text-dark'>{book.volumeInfo.title}</p>
    <p>{book.volumeInfo.authors}</p>
    {book.volumeInfo.categories}
    </div>

</>
))}
</div>

<div className='container'>
<div className='row'>
  <div className='col-2'>{startIndex>0 ?  
   <button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(-1)}>Previous</button> : ""  }
   </div>
  <div className='col-8'></div>
  <div className='col-2'>{maxResults<items1.length-1 ? 
    <button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(1)}> Next</button>: ""  }
    </div>
    </div> 
</div>
</div>
</div>
</div>
)
    }
}
export default Book;