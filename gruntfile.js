module.exports = function(grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  shell: {
    addAndCommit: {
      command: () => ['git add .', 'git commit'].join('&&')
    },
  },
});
  grunt.loadNpmTasks('grunt-shell');
  //grunt shell:addAndDeploy
};


 
