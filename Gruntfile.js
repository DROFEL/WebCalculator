module.exports = function(grunt) {
    

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            dist: {
              src: ['src/*.js'],
              dest: 'src/output.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/app.js',
                dest: 'build/script.min.js'
            }
        },

        mocha:{
            all: {
                src: ['./src/index.html'],
            },
            options: {
                run: true
            }
        },

        jshint: {
            options: {
                esversion: 6
            },
            all: ['Gruntfile.js', 'src/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('grunt-mocha', ['grunt-mocha']);
    grunt.registerTask('grunt-contrib-uglify', ['grunt-contrib-uglify']);
};