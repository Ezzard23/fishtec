import SearchBar from "./SearchBar";

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://whoisapi.p.rapidapi.com/whoisserver/WhoisService',
  params: {
    domainname: 'yahoo.com',
    userName: 'cqeshops@gmail.com',
    password: 'Ezzard23',
    outputformat: 'JSON'
  },
  headers: {
    'X-RapidAPI-Host': 'whoisapi.p.rapidapi.com',
    'X-RapidAPI-Key': '1b8db6acd5msh79e8eee6b70d8c3p154878jsnd62b13959d15'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.WhoisRecord);
}).catch(function (error) {
	console.error(error);
});

export default options;


