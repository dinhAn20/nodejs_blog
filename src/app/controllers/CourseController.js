const Course = require("../models/Course");
class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => res.json(course))
      .catch(next);
  }
  // [GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /course/store
  store(req, res, next) {
    const formData = {
      ...req.body,
      image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
    };
    const course = new Course(formData);
    course
      .save()
      .then((result) => res.send(result.toJSON()))
      .catch(next);
  }
}
module.exports = new CourseController();
