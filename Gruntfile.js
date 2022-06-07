module.exports = function(grunt) {
    

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            options: {
                separator: ';',
                banner:'',
                path: ''
            },
            dist: {
                src: ['src/*.js'],
                dist: 'temp/script.js',
                path: ''
            }
        },

        uglify: {
            options: {
                compress: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'temp/script.js',
                dest: 'build/script.min.js'
            }
        },

        mocha:{
            all: {
                src: ['test/index.html'],
            },
            options: {
                run: true
            }
        },

        cssmin:{
            options: {
                run: true
            },
            target: {
                src: ['./temp/*.css'],
                dest: 'build/style',
                ext: 'min.css'
            }
        },

        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        },

        jshint: {
            options: {
                esversion: 6
            },
            all: ['Gruntfile.js', 'src/**/*.js']
        },

        
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    
    
    grunt.registerTask('grunt-mocha', ['grunt-mocha']);
    grunt.registerTask('grunt-contrib-uglify', ['uglify']);
    grunt.registerTask('grunt-contrib-jshint', ['jshint']);
    grunt.registerTask('grunt-contrib-cssmin', ['cssmin']);
    grunt.registerTask('grunt-contrib-concat', ['concat']);
    grunt.registerTask('grunt-sass', ['sass']);

    grunt.registerTask('build', ['grunt-contrib-jshint', 'mocha', 'concat', 'grunt-contrib-uglify', 'sass', 'grunt-contrib-cssmin']);
};