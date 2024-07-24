const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const gutil = require("gulp-util");

const $ = gulpLoadPlugins();

gulp.task("publish", () => {
  console.log("publish gitbook to github pages");
  return gulp
    .src("**/*")
    .pipe(
      $.ghPages({
        origin: "origin",
        branch: "main",
      })
    )
    .on("error", (err) => {
      // Error handling
      gutil.log(gutil.colors.red("[Error]"), err.toString());
      this.emit("end");
    });
});
