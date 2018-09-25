// 导入gulp依赖（ES6中的新特性：实现服务器端js的模块化编程——导入依赖的模块）
let gulp = require("gulp");
let clean = require("gulp-clean");

let app = {
	src: "src",
	dist: "dist"
}

// 实现文件复制
gulp.task("copy", function() {
	console.log("copy :)");
	
	/*
	//gulp.src(app.src)			// 仅拷贝src空目录
	gulp.src(app.src+"/*")		// 仅拷贝src目录下的一级目录和一级文件（不包含下面的子目录内容）
		.pipe(gulp.dest(app.dist));
	*/
	
	/*
	gulp.src(app.src)
		.pipe(gulp.dest(app.dist));				// 创建dist/src目录
	gulp.src(app.src+"/**")						// 拷贝src目录下的所有子目录和文件到dist/src
		.pipe(gulp.dest(app.dist+"/"+app.src));	// 注意此处路径要构造为dist/src
	*/
	
	// 选择复制（只要复制*.js, *.css, *.htm, *.html）
	gulp.src(app.src)
		.pipe(gulp.dest(app.dist));
	//gulp.src([app.src+"/*.js", app.src+"/*.css", app.src+"/*.htm"])	// 只拷贝一级目录下的（不包含下面的子目录内容）
	//gulp.src([app.src+"/**/*.js", app.src+"/**/*.css", app.src+"/**/*.{htm,html}"])
	//gulp.src(app.src+"/**/*.{js,htm,html,css,php}")
	
	// 去除某些特例文件（注意!的书写位置在路径之前）
	gulp.src(["!"+app.src+"/test.htm", app.src+"/**/*.{js,htm,html,css,php}"])
		.pipe(gulp.dest(app.dist+"/"+app.src));
	
	
	
});

// 删除文件/目录的任务
gulp.task("clean", function() {
	console.log("clean :)");
	gulp.src(app.dist)
		.pipe(clean());		// 通过clean插件对流的来源进行处理，执行删除！
});

// 任务依赖（将任务按序先后执行）
gulp.task("default", ["clean", "copy"], function() {
	console.log("compile :)");
});
