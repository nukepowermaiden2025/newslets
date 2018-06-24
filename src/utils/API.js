import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=f1004a928560472e905e8859b0e58731";

// Export an object with a "search" method that searches the New York Times API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  // add the api key parameter (the one we received when we registered)
  queryURL += "?api-key=f1004a928560472e905e8859b0e58731";
  var searchTerm = $("#search-term") //START HERE
    .val()
    .trim();
  queryURL += "&q=" + searchTerm;
  var startYear = $("#start-year")
    .val()
    .trim();

  if (parseInt(startYear)) {
    queryURL += "&begin_date=" + startYear + "0101";
  }
  var endYear = $("#end-year")
    .val()
    .trim();

  if (parseInt(endYear)) {
    queryURL += "&end_date=" + endYear + "0101";
  }

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");

  return queryURL;
}
