Digital matatus API
========

** work in progress **

www.digitalmatatus.com

Javascript application serving JSON about Nairobi's matatu (public bus) routes

120 routes mapped

version 1 routes serve json files
```
/api/v1/routes'
/api/v1/routes/:route_id'
/api/v1/routes/getShape/:route_id
/api/v1/shapes
/api/v1/shapes/:shape_id
/api/v1/trips
```

version 2 will parse the csv on server:
```
/api/routes
/api/shapes
/api/trips
```

no practical differences between the data that'll be served

consumer source: https://github.com/jasonshark/digital-matatu-client
