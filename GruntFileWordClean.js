/*global module:false*/
module.exports = function(grunt) {

    // replace this line with
    // grunt.loadNpmTasks("grunt-requirejs");
    // if you use this example standalone
    grunt.loadNpmTasks("grunt-requirejs");

    grunt.initConfig({

        requirejs: {
          compile: {
            options: {
              build: true,
              almond: true,
              baseUrl: 'src',
              findNestedDependencies: true,
              paths: {
                'tinymce.core.util.Tools': 'core/src/main/js/util/Tools',
                'tinymce.core.util.Arr': 'core/src/main/js/util/Arr',
                'tinymce.core.Env': 'core/src/main/js/Env',
                'tinymce.core.html': 'core/src/main/js/html',
                'tinymce.core.html.DomParser': 'core/src/main/js/html/DomParser',
                'tinymce.core.html.Node': 'core/src/main/js/html/Node',
                'tinymce.core.html.Schema': 'core/src/main/js/html/Schema',
                'tinymce.core.html.SaxParser': 'core/src/main/js/html/SaxParser',
                'tinymce.core.html.Entities': 'core/src/main/js/html/Entities',
                'tinymce.core.html.Serializer': 'core/src/main/js/html/Serializer',
                'tinymce.core.html.Writer': 'core/src/main/js/html/Writer',
                'tinymce.core.html.Styles': 'core/src/main/js/html/Styles',
                'tinymce.plugins.paste.core': 'plugins/paste/src/main/js/core',
                'tinymce.plugins.paste.core.Utils': 'plugins/paste/src/main/js/core/Utils',
              },
              wrap: {
                  startFile: 'standalone/wrappers/wrap.start',
                  endFile: 'standalone/wrappers/wrap.end'
              },
              name: 'plugins/paste/src/main/js/core/WordFilter',
              include: [
                'tinymce.plugins.paste.core.WordFilter',
                'tinymce.core.html.Styles',
              ],
              //exclude: ['jquery', 'underscore'],
              out: 'standalone/WordFilter.js',
            }
          }
        }

    });

    grunt.registerTask('build', 'requirejs');
};