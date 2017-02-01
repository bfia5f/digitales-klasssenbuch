module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["public/css"],
				},
			files: {
				"public/css/main.css": "less/main.less"
			}
		}
	},
	// running `grunt watch` will watch for changes
	watch: {
		files: "less/*.less",
		tasks: ["less"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
