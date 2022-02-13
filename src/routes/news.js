const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get('', async (req, res) => {
  /*
  window.addEventListener('scroll', (event) => {
    if (window.scrollTo() > 60) 
    {
      document.body.header.style.backgroundColor = "#1E1E1E";
    }
    else
    {
      document.body.header.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    }
  }); 
  */
  try 
  {
    const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57';
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    console.log(news.data.articles);
    res.render('news', { articles: news.data.articles });
  }
  catch(error) 
  {
    console.log("Error: ", error.message);
  }
});
module.exports = newsRouter;
