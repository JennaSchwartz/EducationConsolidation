var express = require('express');
var router = express.Router();
var fs = require('fs');
const {google} = require('googleapis');
const people = google.people('v1');
const oauth2Client = new google.auth.OAuth2(
  "61130927439-7pjc5u470gnkbujno0glm7kqjaukq3sj.apps.googleusercontent.com",
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
  "yxugvrPODS2_XIXZh815fMMj",
  "http://localhost:3000"
);

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Education Consolidation' });
});

router.post('/authenticate', function(req, res, next) {
  var token = req.param('access_token');
  console.log(token);

  const {tokens} = oauth2Client.getToken(token);
  

  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.error(err);
    console.log('Token stored to', TOKEN_PATH);
  });

  https.get(peopleEndPoint + 'resourceName=people/me', res => {
    res.setEncoding('utf8');
    let body = "";
    res.on('data', data => {
      body += data;
    });
    res.on('end')
  });

  res.render('index', { title: 'Hannah!' });
});
  
module.exports = router;