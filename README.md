# Simple Node.JS To-do App

This is a single-page to-do app built using Node.JS, Express and MongoDB in Oct-19 for learning purposes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them?

To get this project up and running you must have access to a computer that you're able to install new files. You'll need a code editor (Visual Code, Sublime, etc), Node.JS, NPM, Git and Heroku CLI installed. 

You'll also need a free [MongoDB Atlas](https://www.mongodb.com) account. Make sure to replace the connectionString on [browser.js:31:101](browser.js) file with your own database user and password info.

### Installing

How to get your development environment up and running?

First, let's create a folder for our project. On this particular example, I've used Visual Studio Code 2 and created a folder named "project-todo-v1".

You can either create a folder using Finder (macOS) or running the code below on the Terminal.

```
mkdir project-todo-v1
```

Then download, extract, copy and paste the files from this repository on you project's folder. If you already have Git installed on your machine, you can clone this project using the command below. If you haven't installed Git yet, just download the files by clicking the button on the top right corner of this page "Clone or download" then "Download as ZIP".

```
$ git clone git@github.com:hellomoka/project-todo-v1.git
```

Now let's open our text editor and install our app's dependencies. If you're using VSCode2, click on "View" then click on "Terminal".

Step 1 - Install app dependencies
```
$ npm install --save express helmet mongodb sanitize-html 
```

Step 2 - Install developer dependencies

```
$ npm install --save-dev nodemon
```

## Deployment

You can deploy this aplication on a live system to use on the internet. On this project we'll use [Heroku](https://www.heroku.com). First you'll need to create an account then go to "Create New App". After setting that up, download and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Make sure you also have [Git](https://git-scm.com/) installed on your computer.

Once you've created your Heroku account and installed Git on your machine, follow the steps below.

On the Terminal tab of your project, run:

Step 1 - Git Config
```
$ git config --global user.name "YOUR-HEROKU-USERNAME"
$ git config --global user.email "YOUR-HEROKU-ACCOUNT-EMAIL"
```

Step 2 - Heroku Login (you'll be asked to confirm your username and password to login)
```
$ heroku login
```

Step 3 - Git Init
```
$ git init
$ git add -A
$ git commit -m 'My first commit'
```

Step 4 - Heroku Remote
```
$ heroku git:remote -a YOUR-APP-NAME-HERE
```

Step 5 - Git Push
```
git push heroku master
```

That's it! Now you can go to your app URL and test it.


## Built With

* [NodeJS](https://nodejs.org)
* [NPM](https://www.npmjs.com)
* [Express](https://expressjs.com)
* [Helmet](https://helmetjs.github.io)
* [MongoDB](https://www.mongodb.com)
* [Axios](https://github.com/axios/axios)
* [Nodemon](https://nodemon.io)
* [Sanitize HTML](https://github.com/apostrophecms/sanitize-html)
* [Bootstrap](https://getbootstrap.com)
* [Git](https://git-scm.com/)

## Authors

* **Moa Torres** - [HelloMoka](https://github.com/hellomoka)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This project was created for learning purposes only
