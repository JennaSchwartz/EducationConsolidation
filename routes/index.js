var express = require('express');
var router = express.Router();
var fs = require('fs');
const {google} = require('googleapis');
const people = google.people('v1');
const oauth2Client = new google.auth.OAuth2(
  "61130927439-7pjc5u470gnkbujno0glm7kqjaukq3sj.apps.googleusercontent.com",
  "yxugvrPODS2_XIXZh815fMMj",
  "https://edu-consolidation.azurewebsites.net"
);

const scopes = [
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/classroom.rosters.readonly',
  'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
  'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

google.options({auth: oauth2Client});

const TOKEN_PATH = 'token.json';

async function getUserName() {
  var person = await people.people.get({
    resourceName: 'people/me',
    personFields: 'names'
  });

  return person.data.names[0].displayName;
}

/* GET home page. */
router.get('/', async function(req, res, next) {
    if (req.query.code != undefined) {
      var code = req.query.code;
      const {tokens} = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });

      var name = await getUserName();
      res.render('index', { title: 'Education Consolidation', signInText: 'Welcome, ' + name });
    }
    res.render('index', { title: 'Education Consolidation', signInText: 'Sign in via Google Classroom' });
});

router.get('/authenticate', function(req, res, next) {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });

  res.redirect(authorizeUrl);
});

module.exports = router;