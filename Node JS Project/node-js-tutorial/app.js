const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', { qs: req.query })
})

app.post('/about', urlencodedParser, (req, res) => {
    res.render('about-success', { data: req.body })
})

app.get('/profile/:name', (req, res) => {
    // res.send('Profile name is ' + req.params.id)
    const data = { age: 30, job: 'developer', friends: ['sarah', 'jane', 'willma'] }
    res.render('profile', { person: req.params.name, data })
})


app.listen(3000)






// const http = require('http')
// const fs = require('fs')

// const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8')
// const writeStream = fs.createWriteStream(__dirname + '/write-me.txt')

// readStream.pipe(writeStream)

// const server = http.createServer((req, res) => {
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         fs.createReadStream(__dirname + '/index.html').pipe(res)
//     }
//     else if (req.url === '/about-me') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         fs.createReadStream(__dirname + '/about.html').pipe(res)
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' })
//         fs.createReadStream(__dirname + '/404.html').pipe(res)
//     }


    // res.writeHead(200, { 'Content-Type': 'application/json' })

    // console.log(req.url)

    // const person = {
    //     name: 'alex',
    //     email: 'alex@email.co',
    //     job: 'designer'
    // }

    // res.end(JSON.stringify(person))

    // const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')

    // readStream.pipe(res)
// })

// server.listen(3001, '127.0.0.1')


// readStream.on('data', (chunk) => {
//     console.log('new data received')
//     console.log(chunk)
//     writeStream.write(chunk)
// })




// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('hello world')
// })

// console.log('port 3000')
// server.listen(3000, '127.0.0.1')





// const fs = require('fs')

// fs.readFile('read-me.txt', 'utf-8', function (error, data) {
//     fs.writeFile('write.txt', data, function (error) {
//         if (error) {
//             console.log(error)
//         }
//     })
// })

// fs.writeFileSync('write.txt', text)

// fs.unlink('write.txt', (error) => {
//     console.log(error)
// })

// fs.mkdir('my-folder', () => {
//     fs.readFile('read-me.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./my-folder/write-me.txt', data, () => {

//         })
//     })
// })

// fs.unlink('./my-folder/write-me.txt', () => {
//     fs.rmdir('my-folder', (error) => {
//         console.log(error)
//     })
// })






// const events = require('events')
// const util = require('util')

// const teams = function (name) {
//     this.name = name
// }

// util.inherits(teams, events.EventEmitter)

// const Arsenal = new teams('Arsenal')
// const Juventus = new teams('Juventus')
// const Galatasaray = new teams('Galatasaray')

// const teamArray = [Arsenal, Juventus, Galatasaray]

// teamArray.forEach((team) => {
//     team.on('nation', function (nation) {
//         console.log(team.name + ' is ' + nation + ' football club')
//     })
// })

// Arsenal.emit('nation', 'English')
// Juventus.emit('nation', 'Italian')
// Galatasaray.emit('nation', 'Turkish')



// const myEmitter = new events.EventEmitter

// myEmitter.on('test', function(arg) {
//     console.log(arg)
// })

// myEmitter.emit('test', 'hello world')

// elements.on('click', function() {

// })

// console.log('hello world')

// let count = 0

// const timer = setInterval(() => {
//     count = count + 2
//     console.log(`${count} seconds have passed`)
//     if (count > 6) {
//         clearInterval(timer)
//     }
// }, 2000)

// console.log(__dirname)
// console.log(__filename)

// function orange() {
//     console.log('Hello world')
// }

// orange()

// function callbackFunc(func) {
//     func()
// }

// let red = function() {
//     console.log('hi there')
// }

// callbackFunc(red)

// console.log(helper.user('Alex'))
// console.log(helper.id('123'))
// console.log(helper.email('alex@mail.co'))