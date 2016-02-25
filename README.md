## BKON Code Challenge

Run `npm install` in the command line to install the node dependencies found in the package.json file.
Run `gulp` in the command line if you want to start to start the gulp complier. See GULP section bellow for more information.
Run `node server.js` to start the server, or `nodemon server.js` to start a nodemon server
Server will run on port 3000.

## Description of Challenge

In this challenge you can see the 10 newest news stories from NY TIMES API site with their headline, snippet of the article, and link to main article.
Also I found average articles posted per day of the week in the year 2014.

I used React, ReactDOM, and React Router frameworks with a basic ExpressJS server to serve up the files.
I used Gulp to compile my code and listen for changes during the build process.


## GULP -- Build and watch

If you would like to build the `dist/` folder and then watch for file changes, then run the command:
`gulp`

This will run:
- watch
- lint
- babel
- sass
