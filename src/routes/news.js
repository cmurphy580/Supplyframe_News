const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

// MAKE ONE API CALL
// const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57';
// const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

newsRouter.get('', async (req, res) => {
  try 
  {
    const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57';
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    console.log(news.data.articles.length);
    res.render('news', { articles: news.data.articles, url: false });
  }
  catch(error) 
  {
    console.log("Error: ", error.message);
  }
});

newsRouter.get('/page/2', async (req, res) => {
  try 
  {
    console.log(req.url);
    const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57';
    const usNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const gbNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`); 
    let articles = [...usNews.data.articles, ...gbNews.data.articles];
    res.render('page_two', { articles, url: req.url });
  }
  catch(error) 
  {
    console.log("Error: ", error.message);
  }
});

newsRouter.get('/article/:id', async (req, res) => {
  try 
  {
    const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57';    
    const usNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const gbNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`); 
    let articles = [...usNews.data.articles, ...gbNews.data.articles];
    let id = parseInt(req.url.split("/")[2]); 
    // console.log(req.url.split("/")[2]);
    // console.log(id);
    // console.log(news.data.articles[id]);
    res.render('article', { article: articles[id], url: req.url });
  }
  catch(error) 
  {
    console.log("Error: ", error.message);
  }
});

newsRouter.get('/provider/:provider', async (req, res) => {
  try 
  {
    const provider_images = { 
      "the-wall-street-journal": "https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbCUyMHN0cmVldCUyMGpvdXJuYWx8ZW58MHx8MHx8&w=1000&q=80",
      "reuters": "https://www.thomsonreuters.com/content/dam/openweb/images/reuters/16-9/RTR1ZKVU-Luke-MacGregor.jpg.transform/rect-768/q90/image.jpg",
      "bbc-news": "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2011%2F06%2FBBCNews1.jpg&signature=e2bb01126f734db23049a6cd42ac96df",
      "al-jazeera-english": "https://www.foreignbrief.com/wp-content/uploads/2019/01/Al-jazeera-logo.jpg",
      "bleacher-report": "https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/e1/b1/de/e1b1de64-6a64-70b2-eb12-0f1d4aa63ae9/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png",
      "espn": "https://wallpaperaccess.com/full/2111101.jpg",
      "techcrunch": "https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png",
      "wired": "https://media.wired.com/photos/5f0e59f4669fd9d0df83f385/master/w_1280%2Cc_limit/get_wired_podcast_share.jpg"
    }
    let provider = req.url.split("/")[2]; 
    const provider_image = provider_images[provider];
    const API_KEY = '0c224bd6f6fc43fb9e28d804bde31f57'; 
    const provider_news = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${provider}&apiKey=${API_KEY}`);

    if (provider.includes("bbc"))
    {
      provider = provider.split("-");
      provider = provider[0].toUpperCase() + " " + provider[1];
    } 
    else if (provider.includes("-"))
    {
      provider = provider.split("-").join(" ");
      if (provider.includes("english"))
      {
        provider = provider.split("english").join("")
      }
    }
    else if (provider === "espn")
    {
      provider = provider.toUpperCase();
    }
    else if (provider === "techcrunch")
    {
      provider = provider.split("cr");
      provider = provider[0] + "Cr"+ provider[1];
    }
    res.render('news_provider', { provider, provider_image, articles: provider_news.data.articles, url: req.url });
  }
  catch(error) 
  {
    console.log("Error: ", error.message);
  }
});



module.exports = newsRouter;


