function Engineer(github = '') {
   this.github = github;
}

Engineer.prototype.getGithub = function () {
   return {
      github: this.github
   };
}

module.exports = Engineer