class NewsController {
  index(req, res) {
    res.send("Hello World");
  }
  show(req, res) {
    res.send("Hello World");
  }
}
module.exports = new NewsController();
