import React from 'react'
import axios from "axios";

//const axios = require("axios");
const baseURL = 'https://api.adviceslip.com/advice'
const options = {
  url: baseURL,
  params: {
    maxResults: '10'
  },
  headers: {
    'X-RapidAPI-Key': process.env.ZKEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchAdvice = async()=>{
    const {data} = await axios.get(baseURL);
    return data;
}
