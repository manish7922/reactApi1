import axois  from "axios";
let query ="";
let authorName="";
let startIndex="";
let maxResults="";
let  language="";
let orderBy="";
let printType="";
let filter="";
// const baseURL=`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${authorName}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=${language}&orderBy=${orderBy}&printType=${printType}&filter=${filter}`;

function get() {
  
    return axois.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${authorName}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=${language}&orderBy=${orderBy}&printType=${printType}&filter=${filter}`)
}

export default {
    get
}