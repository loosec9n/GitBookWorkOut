const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");

const $ = gulpLoadPlugins();

gulp.task("publish", () => {
  console.log("publish gitbook to github pages");
  return gulp.src("**/*").pipe(
    $.ghPages({
      origin: "origin",
      branch: "main",
    })
  );
});
