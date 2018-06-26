import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// const APIKEY = "?api-key=f1004a928560472e905e8859b0e58731";
const BASEAPIKEY = "f1004a928560472e905e8859b0e58731";

export default {
  // Export an object that searches the New York Times API for the passed
  search: function(query, fromDate, toDate) {
    return axios.get(BASEURL, {
      params: {
        "api-key": BASEAPIKEY,
        q: query,
        begin_date: fromDate,
        end_date: toDate
      }
    });
    console.log(query);
  },

  // Gets all books
  getArticles: function() {
    return axios.get("/api/article");
  },
  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  }
};
