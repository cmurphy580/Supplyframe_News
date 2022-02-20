const formatProviderText = (provider) => {
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
          provider = provider.split("english").join("").trim();
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
      return provider;
  }
  
  module.exports = formatProviderText;