#**Lab03_Node_Heroku**

## Deployed application


## Name of the endpoint

### Client

### Server

## Short Description

In this lab we have two part, we are going to implement a client and a server. On the server part we installed express.js and the server is running on port 3000 .On the server side we got the data wrapped in an object and it is sent using the request body. Then we extracted the words from the sentence based on the space delimiter which was sent by the client side. We used a javascript map to store the frequency of words using their length.For this we initialized the map with default value 0 for 1-10 key. Each word can have maximum length of ten. Then we iterated through the array of words, counted the length of it and updated the frequency in that map. After that we sent the mapped frequency as an object in the response. On the client side we used axios to make the api call to the server side. In client side we used ejs view engine. After receiving the response we rendered it using ejs to show the data in the web interface. In the client side we used a table to show the frequency of word to the user.