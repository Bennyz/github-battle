var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_scret=" + sec;

function getUserInfo(username) {
  return axios.get('http://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function(user) {
        console.log(user.data);
        return user.data;
      });
    }).catch(function(error) {
      console.warn('Error in getPlayersInfo', error);
    });
  }
};

module.exports = helpers;
