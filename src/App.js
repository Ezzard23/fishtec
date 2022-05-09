import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import options from './Server';
import CardList from './CardList';

function App() {
  const axios = require("axios");

  
  const [state,setState] = useState({
    results : [],
  });
  /*const onSearch = async (text) => {
    const result = await Server.request;
    //
  }*/

const onSearch = async (text) => {

  
  
  const results = axios.request(options).then(function (response) {
    console.log(response.data.WhoisRecord);
    
  }).catch(function (error) {
    console.error(error);
  });
  

  /*await Server.get("/",{
  'params': {'apiKey':'at_ozfV7TpIQZ5CyrlYKBe2VMhY7S0FD', 'userName': 'cqeshops@gmail.com',
  'password': 'Ezzard23','domainName':'google.com','outputFormat':'JSON'}, 'headers': {
    'X-RapidAPI-Host': 'whoisapi.p.rapidapi.com',
    'X-RapidAPI-Key': '1b8db6acd5msh79e8eee6b70d8c3p154878jsnd62b13959d15'
  }*/

setState(prevState => {
  return {...prevState,'result':results}
});

}
  return (
      <div className="App">
        <section className='container'>
          <div className='heading'>
            <h1>WHOIS IP Address Search</h1>
            <p>Remember the time Bobby Boucher showed up at halftime<br/> and the Mud Dogs won the Bourbon Bowl, do ya?<br/> No? Well neither do we, but we <strong><em>can</em></strong> help you search domains.</p>
          </div>
        </section>
        <SearchBar onSearch={onSearch} onSubmit={onSearch}/>
        <CardList results={state.results}/>
      </div>
  );
}



export default App;
