const fs = require('fs');
const start = fs.readFileSync('./standalone/wrappers/wrap.start');
const end = fs.readFileSync('./standalone/wrappers/wrap.end');
const stylesEnd = fs.readFileSync('./standalone/wrappers/wrap.styles.end');
const swag = require('@ephox/swag');

/*global module:false*/
module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-requirejs");
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      shell: {
        tsc: { command: 'node ./node_modules/typescript/bin/tsc' }
      },

      uglify: {
        options: {
          compress: {
            dead_code: true
          }
        },
        my_target: {
          files: {
            'standalone/WordFilter.min.js': ['standalone/WordFilter.js'],
            'standalone/Styles.min.js': ['standalone/Styles.js'],
          }
        }
      },

      rollup: {
        core: {
          options: {
            treeshake: true,
            moduleName: 'tinymceWordPasteFilter',
            format: 'iife',
            banner: start,
            footer: end,
            plugins: [
              swag.nodeResolve({
                basedir: __dirname,
                prefixes: {
                  'tinymce/core': 'lib/core/main/ts',
                }
              }),
              swag.remapImports()
            ]
          },
          files:[
            {
              src: 'lib/plugins/paste/main/ts/core/WordFilter.js',
              dest: 'standalone/WordFilter.js'
            }
          ]
        },
        styles: {
          options: {
            treeshake: true,
            moduleName: 'tinyMceStyleParser',
            format: 'iife',
            banner: start,
            footer: stylesEnd,
            plugins: [
              swag.nodeResolve({
                basedir: __dirname,
                prefixes: {
                  'tinymce/core': 'lib/core/main/ts'
                }
              }),
              swag.remapImports()
            ]
          },
          files:[
            {
              src: 'lib/core/main/ts/html/Styles.js',
              dest: 'standalone/Styles.js'
            }
          ]
        }
      },
    });

    grunt.registerTask(
      'build', [
        'shell:tsc', 
        'rollup', 
        // 'uglify' - won't uglify this by default now; let dependent projects handle it 
      ]
    );
};