function Engineer(github = '') {
   this.github = github;

   this.getGithub = function() {
      return {
         github: this.github
      };
   };
}

module.exports = Engineer