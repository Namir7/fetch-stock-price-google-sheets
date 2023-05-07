/*====================================================================================================================================*
  Fetch Stock Price
  ====================================================================================================================================
  Version:      0.1
  Project Page: -
  Copyright:    -
  License:      MIT
  ------------------------------------------------------------------------------------------------------------------------------------
  Script to import stock price from fcsapi.com/api-v3
  ------------------------------------------------------------------------------------------------------------------------------------
  Changelog:
  
  0.1    Init
 *====================================================================================================================================*/
/**
 * Imports stock price by external api.
 * 
 * @param {url} the URL to a public JSON feed
 * @param {query} a comma-separated lists of paths to import. Any path starting with one of these paths gets imported.
 * @param {options} a comma-separated list of options that alter processing of the data
 *
 * @return a two-dimensional array containing the data, with the first row containing headers
 * @customfunction
 **/

async function FetchStockPrice(stockSymbol, apiKey) {
   const url = `https://fcsapi.com/api-v3/stock/latest?symbol=${stockSymbol}&access_key=${apiKey}`
 
   const fetchedData = await UrlFetchApp.fetch(url);
 
   if (fetchedData.status === false) {
     return `error, ${fetchedData}`
   }
 
   const fetchDataObj = JSON.parse(fetchedData.getContentText())
 
   const currentPrice = fetchDataObj.response[0].c
   
   return currentPrice
 }