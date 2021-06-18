'use strict';
module.exports = function(app) {
  var contest = require('./dataController');

  // todoList Routes
  app.route('/AtCoder')
    .get(contest.atcoder);

  app.route('/Codechef')
    .get(contest.codechef);

  app.route('/Codeforces')
    .get(contest.codeforces);

  app.route('/HackerRank')
    .get(contest.hackerrank);

  app.route('/HackerEarth')
    .get(contest.hackerearth);

  app.route('/Leetcode')
    .get(contest.leetcode);

  app.route('/CsAcademy')
    .get(contest.csacademy);

  app.route('/TopCoder')
    .get(contest.topcoder);


  app.route('/KickStart')
    .get(contest.kickstart);


};