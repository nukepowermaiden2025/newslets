const db = require("../models");

// Defining methods for the Article Controller
module.exports = {
  findAll: function(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log(req.body);
    const article = {
      id: req.body._id,
      title: req.body.headline.main,
      synopsis: req.body.snippet,
      url: req.body.web_url,
      publishdate: req.body.pub_date
    };
    db.Article.create(article)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
