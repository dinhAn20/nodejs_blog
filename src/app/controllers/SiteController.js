const Course = require("../models/Course");

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => res.json(courses))
      .catch(next);
  }
  search(req, res) {
    res.send("Hello World");
  }
}
module.exports = new SiteController();
