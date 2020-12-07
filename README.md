# FPLRecommender

POST REQUESTS

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

DELETE REQUESTS

http://fplrecommender.web.illinois.edu/delete

- playerName must be exact for the delete to work.

{
"playerName": "FPL.ai"
}

GET REQUESTS

http://fplrecommender.web.illinois.edu/getBest

- gets the best players in the premier league.

http://fplrecommender.web.illinois.edu/fulltable

- gets all the records with many the common statistics.

http://fplrecommender.web.illinois.edu/getBetterthanAvg

- gets the players above the average level in the premier league.

PUT REQUESTS

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



Notes

The JSON Data indicates body to be sent with the request.
No JSON data indicates no data to be sent.
Team and Position names must be between 1-3 characters.
