import axios from 'axios';


export default class Search {
  constructor(query) {
    this.query = query;    
  }

  async getResults() {
    // fix for CORS error (cross-browser call)
    const url = 'https://api.scryfall.com';
    const proxy = 'https://crossorigin.me/';
    const key = 'e7ad8e1dcb4babf119f92615c3d9faf1';
    const string = '/sets/';
  
    try {
      // axios over 'fetch' call for wider browser compatibility and 1 step process
      // AJAX call w/ Axios, returns promise in json format
      // const res = await axios(`${url}search?key=${key}&q=${this.query}`);
      const res = await axios(`${url}${string}${this.query}`);
      // this.result = res.data.recipes;      
      // console.log(this.result);
      
    } catch (error) {
      console.log(error);
    }
  
  }

}


// https://www.food2fork.com/api/search
// https://www.food2fork.com/api/get 
// e7ad8e1dcb4babf119f92615c3d9faf1

// getResults('pizza');