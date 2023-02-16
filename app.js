const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const comment = require('./models/comments');
const app = express();
require("dotenv").config();

// ********* VIEW ENGINE SET UP ********* //
app.set('view engine','ejs');

// ********* CONNECTING TO MANGODB ********* //
const URI = process.env.DATABASE_URL;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URI, config)
.then((result) => app.listen(process.env.PORT))
.catch((err) => console.log(err));

// ********* MIDDLEWARE CONNECTION ********** //
app.use(morgan('dev'));

// ********* PUBLIC FILE CONNECTION ********* //
app.use(express.static('public'));

// ********* GENERATING POST OBJECT ********* //
app.use(express.urlencoded({extended: true}));


// ********* PAGE LOADING (GET) ********* //


// ********* HOME PAGE ********* //
app.get('/',(req,res) => {
  const title = "Home";
  res.render('home', {title});
})

// ********* ABOUT ME PAGE ********* //
app.get('/aboutme',(req,res) => {
  const title = "About Me";
  res.render('about-me',{title});
})

// ********* PROJECT PAGE ********* //
app.get('/project',(req,res) => {
  const title = "Project";
  res.render('project',{title});
})

// ********* DASHBOARD COMMENTS PAGE ********* //
app.get('/Dashboard',(req,res) => {
  comment.find().sort({createdAt: -1})
  .then((result) => {
    res.render('Dashboard',{comments:result});
  })
})

app.post('/Dashboard',(req,res) => {
  const DashboardComments = new comment(req.body);
  DashboardComments.save()
  .then((result) => res.redirect('/Dashboard'))
  .catch((err) => console.log(err));

})

// ********* CREATE COMMENTS PAGE ********* //
app.get('/Create-Comments',(req,res) => {
  res.render('Write',{title:"Write Comments"});
})

app.get('/Create', (req,res) => {
  res.redirect('/create-comments');
})

// ********* ABOUT COMMENTS PAGE ********* //
app.get('/About',(req,res) => {
  res.render('About',{title:"About My Website"});
})
