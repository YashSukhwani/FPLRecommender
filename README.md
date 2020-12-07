# FPLRecommender

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed at http://fplrecommender.web.illinois.edu/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Step 1

```bash
cd fpl_reco
```

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **All** Component : This Component displays the entire UI.

2. **Display** Component : This Component is used to display specific data in tables according to the task or query executed by the user.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /customerlist which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://github.com/mui-org/material-ui to understand how to use Material UI

### Application Demo

https://www.loom.com/share/a70ce2c0a1184af68151311591c6e72e?sharedAppSource=personal_library

## API Reference

## POST REQUESTS

http://fplrecommender.web.illinois.edu/insert

- teamName & position fields are optional.

{
"playerName": "FPL.ai",
"teamName": "MAN",
"position": "CM"
}

http://fplrecommender.web.illinois.edu/search

- playerName specifies a prefix for the name to be searched.

{
"playerName": "FP"
}

## DELETE REQUESTS

http://fplrecommender.web.illinois.edu/delete

- playerName must be exact for the delete to work.

{
"playerName": "FPL.ai"
}

## GET REQUESTS

http://fplrecommender.web.illinois.edu/getBest

- gets the best players in the premier league.

http://fplrecommender.web.illinois.edu/fulltable

- gets all the records with many the common statistics.

http://fplrecommender.web.illinois.edu/getBetterthanAvg

- gets the players above the average level in the premier league.

## PUT REQUESTS

This format applies to all the PUT requests.

{
"playerName": "FPL.ai",
"statValue": 10
}

http://fplrecommender.web.illinois.edu/updateBonus

http://fplrecommender.web.illinois.edu/updateCost

http://fplrecommender.web.illinois.edu/updateSelectedByPercent

http://fplrecommender.web.illinois.edu/updatePointsPerGame

http://fplrecommender.web.illinois.edu/updateMinutes

http://fplrecommender.web.illinois.edu/updateStatus

http://fplrecommender.web.illinois.edu/updateTotalPoints

http://fplrecommender.web.illinois.edu/updateTeam

http://fplrecommender.web.illinois.edu/updatePosition



### Notes

The JSON Data indicates body to be sent with the request.

No JSON data indicates no data to be sent.

Team and Position names must be between 1-3 characters.
