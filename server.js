let express = require('express')
let helmet = require('helmet')
let mongodb = require('mongodb')
let sanitizeHTML = require('sanitize-html')

// App
let app = express()
app.use(helmet())
let db

// Server Port
let port = process.env.PORT
if (port == null || port == "") {
  port = 3000
  console.log(`Server running on port ${port}`)
}

// Express Config - Add form values to body object then body object to request's values
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

// DOM Passowrd Function
function passwordProtected(req, res, next) {
  res.set('WWW-Authenticate', 'Basic realm="Simple To-do App"')
  console.log(req.headers.authorization)
  if (req.headers.authorization == "Placeholder") {
    next()
  } else {
    res.status(401).send("Authentication Required")
  }
}

// Express Config - Set public folder
app.use(express.static('public'))

// MongoDB Connection
let connectionString = 'mongodb+srv://<user>:<password>@<cluster-name>-dckyu.mongodb.net/test?retryWrites=true&w=majority'
mongodb.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (error, client) {
  db = client.db()
  app.listen(port)
  console.log(`Successfully connected to the database`)
})

// DOM Password
app.use(passwordProtected)

// Routes
app.get('/', function (req, res) {
  db.collection('items').find().toArray(function (error, items) {
    res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1">To-Do App</h1>
      
      <div class="jumbotron p-3 shadow-sm">
        <form id="create-form" action="/create-item" method="POST">
          <div class="d-flex align-items-center">
            <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
            <button class="btn btn-primary">Add New Item</button>
          </div>
        </form>
      </div>
      
      <ul id="item-list" class="list-group pb-5">

      </ul>
      
    </div>

    <!--  Turn input items to JSON string  -->
    <script>
    let items = ${JSON.stringify(items)}
    </script>

    <!--  Route  -->
    <script src="/browser.js"></script>

    <!--  Run Axios via CDN  -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  </body>

  </html>
  `)
  })
})

app.post('/create-item', function (req, res) {
  let safeText = sanitizeHTML(req.body.text, { allowedTags: [], allowedAttributes: [] })
  db.collection('items').insertOne({ text: safeText }, function (error, info) {
    res.json(info.ops[0])
  })
})

app.post('/update-item', function (req, res) {
  let safeText = sanitizeHTML(req.body.text, { allowedTags: [], allowedAttributes: [] })
  db.collection('items').findOneAndUpdate({ _id: new mongodb.ObjectId(req.body.id) }, { $set: { text: safeText } }, function () {
    res.send('Success!')
  })
})

app.post('/delete-item', function (req, res) {
  db.collection('items').deleteOne({ _id: new mongodb.ObjectId(req.body.id) }, function () {
    res.send('Success!')
  })
})
