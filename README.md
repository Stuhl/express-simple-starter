# Express starter for simple projects

This package is a simple express server with some out of the box goodies for you.

### Tech

  - [compression](https://www.npmjs.com/package/compression) - enables gzipping which minifies sent JSON over HTTP
  - [cors](https://www.npmjs.com/package/cors) - Cross origin ressource sharing as express middleware
  - [dotenv](https://www.npmjs.com/package/dotenv) - enables you to make secrets plain easy with .env files
  - [express](https://expressjs.com) - who guessed it
  - [helmet](https://www.npmjs.com/package/helmet) - security purpose and enables to whitelist sites for API calls
  - [node-fetch](https://www.npmjs.com/package/node-fetch) - enables fetch in node
  - [typescript](https://www.npmjs.com/package/typescript) - I threw it in here because sometimes it's needed if code grows though this package is more headed towards simple projects
  - [jest](https://www.npmjs.com/package/jest) - (dev dependency) unit testing is love unit testing is life, you can run it with `npm run test`
  - [nodemon]() - (dev dependency) watches the index.js file, you run it with `npm run dev`


### Why

I'm extremely tired of packages and boilerplates that are complete overkill and have no benefit what so ever for alot of projects I've done. People seem to throw in lots of modules and dependencies into the package cuz "tech rules" and "why not". I don't like that style so I thought I'm gonna do my own little boilerplate so I don't have to deal with this anymore.

### Purpose
You might noticed I didn't put in webpack or html engines like handlebars etc. The reason is because with this package I just want to have a back-end which sends and receives API calls. So it's basically a proxy server for API requests. So because it will handle only that you don't really need handlebars or pug. Also I found webpack to be overkill because usually these servers aren't more than 200-300 lines of code so I guess you won't really feel the minifying or code splitting performance gains anyway.

Surely you mileage may vary and you want to do more than just a simple back-end, I won't be standing in your way. You are free to extend the package with modules as you like.


### Sidenote regarding `dotenv` package
If you never used it please make sure that you ignore **.env** inside of the **.gitignore** file. Otherwise your secrets will also be pushed into git and github which might expose confidential data. If you're a newcomer with that module I would read the dotenv docs first.
