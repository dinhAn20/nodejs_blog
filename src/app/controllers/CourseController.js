const { mongooseToObject } = require("../../util/mongoose");
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

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((course) => res.json(course))
      .catch(next);
  }

  // [DELETE] /course/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then((course) => res.json(course))
      .catch(next);
  }
  
  // [DELETE] /course/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then((course) => res.json(course))
      .catch(next);
  }
  
  // [PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then((course) => res.json(course))
      .catch(next);
  }
}
module.exports = new CourseController();
