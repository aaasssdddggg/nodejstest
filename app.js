const express = require('express')
const bodyParser = require('body-parser')
const cron = require('node-cron');
//const mailer = require('nodemailer');

// Schedule a task to run every minute.
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Listen on port 5000
app.listen(process.env.PORT ||port, () => console.log(`Listening on port ${port}`))
console.log("Task is running every minute")



while(true)
{
//console.log("Hello");
sleep(20000).then(() => {
    console.log("World!");
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
}


