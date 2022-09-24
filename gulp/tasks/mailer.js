export const mailer = () => {
	return app.gulp.src(app.path.src.mailer)
		.pipe(app.gulp.dest(app.path.build.mailer))
}