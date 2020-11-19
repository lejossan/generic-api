
<!-- Social Preset API -->

<br/>

# Prerequisits
* NodeJS
* Npm
    * ExpressJS
    * Mocha
* MongoDB
    * Mongoose `npm install mongoose --save`
    * BodyParser `npm install body-parser --save`

<br/>
<br/>

# Running
Installation - `npm install`  
Start app with - `nodemon index`  
Start mongo with - `mongo`  

<br/>

## For development
Whatch and restart express-server with Nodemon  
`sudo npm install -g nodemon`

available @ http://localhost:8080/api/preset/

## Test framework
Mocha  
Run with - `npm run tests`

<br/>
<br/>

# Available endpoints


What | Command | Endpoint | Body
--------|-------|--------|-------
Get all presets | GET | /api/preset
Get a specific preset | GET | /api/preset/[id]
Add preset | POST | /api/preset | raw body of type json
Delete preset | DELETE | /api/preset/[id]
Update preset | PUT | /api/preset/[id] | raw body of type json
Search preset | GET | /api/preset/search/[query]