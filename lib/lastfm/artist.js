var http = require('http'),
  exports = module.exports,
  reqOps = {
    host: 'ws.audioscrobbler.com',
    port:80,
    path: '',
    method: 'GET'
  },
  defaultOps = {
    json: true
  };
  fmOps = {
    api_key: 'notarealkey9043u349',
    json: true
  };

function createPath(possibles, options){
  var qs = '';
  for(possible in possibles){
    if(options[possible]){
      qs = qs + '&' + possible + '=' + options[possible];
    }
  }
  return qs;
}


function makeReq(privateOps, callback){
  var req = http.request(privateOps, function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk){
  process.nextTick(function(){
    callback(chunk);
  });
  });
  });
  req.end();
}

exports.configure = function(options){
  fmOps.api_key = options.api_key;
  if(options.json === true){
    fmOps.format = '&format=json';
  }else{
    fmOps.format = '';
  };
  };

exports.addTags = function(){};

exports.getCorrection = function(artistName, callback){
  var privateOps = reqOps,
  path = '/2.0/?method=artist.getcorrection&artist=' + escape(artistName) + '&api_key=' + fmOps.api_key + fmOps.format;
  privateOps.path = path;
  makeReq(privateOps, callback);
  }
  
exports.getEvents = function(){};
exports.getImages = function(options, callback){
  var path = '/2.0/?method=artist.getinfo';

  if(options.mbid){
    path = path + '&mbid=' + options.mbid;
  } else if(options.artist){
    path = path + '&artist=' + options.artist;
  } else{
    //throw error because api needs either an mbid or artist name
  }
  if(options.page){
    path = path + '&page=' + options.page;
  }
  if(options.limit){
    path = path + '&limit=' + options.limit;
  }
  if(options.autocorrect){
    path = path + '&autocorrect=' + options.autocorrect;
  }
  if(options.order){
    path = path + '&order=' + options.order;
  }
  path = path + '&api_key=' + fmOps.api_key + fmOps.format;
  var privateOps = reqOps;
  privateOps.path = path;
  makeReq(privateOps, callback);
  }
exports.getInfo = function(options, callback){
  var path = '/2.0/?method=artist.getinfo';

  if(options.mbid){
    path = path + '&mbid=' + options.mbid;
  } else if(options.artist){
    path = path + '&artist=' + options.artist;
  } else{
    //throw error because api needs either an mbid or artist name
  }
  if(options.lang){
    path = path + '&lang=' + options.lang;
  }
  if(options.autocorrect){
    path = path + '&autocorrect=' + options.autocorrect;
  }
  if(options.username){
    path = path + '&username=' + options.username;
  }
  path = path + '&api_key=' + fmOps.api_key + fmOps.format;
  var privateOps = reqOps;
  privateOps.path = path;
  makeReq(privateOps, callback);
  }
exports.getPastEvents = function(){};
exports.getPodcast = function(){};
exports.getShouts = function(){};
exports.getSimilar = function(options, callback){
  var path = '/2.0/?method=artist.getsimilar';

  if(options.mbid){
    path = path + '&mbid=' + options.mbid;
  } else if(options.artist){
    path = path + '&artist=' + options.artist;
  } else{
    //throw error because api needs either an mbid or artist name
  }
  if(options.limit){
    path = path + '&limit=' + options.limit;
  }
  if(options.autocorrect){
    path = path + '&autocorrect=' + options.autocorrect;
  }
  path = path + '&api_key=' + fmOps.api_key + fmOps.format;
  var privateOps = reqOps;
  privateOps.path = path;
  makeReq(privateOps, callback);
  }
exports.getTags = function(){};
exports.getTopAlbums = function(options, callback){
  var path = '/2.0/?method=artist.gettopalbums';

  if(options.mbid){
    path = path + '&mbid=' + options.mbid;
  } else if(options.artist){
    path = path + '&artist=' + options.artist;
  } else{
    //throw error because api needs either an mbid or artist name
  }
  if(options.lang){
    path = path + '&limit=' + options.limit;
  }
  if(options.page){
    path = path + '&page=' + options.page;
  }
  if(options.autocorrect){
    path = path + '&autocorrect=' + options.autocorrect;
  }
  path = path + '&api_key=' + fmOps.api_key + fmOps.format;
  var privateOps = reqOps;
  privateOps.path = path;
  makeReq(privateOps, callback);
  }
exports.getTopFans = function(){};
exports.getTopTags = function(){};
exports.getTopTracks = function(){};
exports.removeTag = function(){};
exports.search = function(){};
exports.share = function(){};
exports.shout = function(){};

