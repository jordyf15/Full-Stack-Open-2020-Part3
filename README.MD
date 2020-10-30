# Full-Stack-Open 2020 Part 3 
In part 3 we will learn about the back end using node.js and express, the database with mongoDB and mongoose, Linting using Eslint, and deploying our application to the internet with heroku. In this part we will develop the back end for the phonebook's front end created in part 2.  
  
Part 3 consist of 4 sections:  
1. Node.js and Express: 
In this part we will learn about backend using node.js and express. we will learn how to create route handlers for get, post, and delete request which will be use to fetch and alter data in the backend. We will also learn nodemon and postman which can be used to help us during backend development. 
2. Deploying app to the Internet:  
In this part we will learn generating production build of our frontend so it can be used by the back end to become full stack application, proxies, and deploying our application to the internet with heroku.
3. Saving data on MongoDB:  
In this section we will learn about debugging node application, schemas in mongoDB, creating, adding, and fetching objects in the database, connecting back end to database, error handling and errorhandling middle ware.
4. Validation and Esling:  
In this section we will learn about mongoDB validation and also eslint to check our source code for errors.

## Live Demo
https://thawing-dusk-55427.herokuapp.com/

## Techonologies Used
1. Cors version ^2.8.5
2. Dotenv version ^8.2.0
3. Express version ^4.17.1
4. Mongoose version ^5.10.7
5. Mongoose-unique-validator version: ^2.0.3
6. Morgan version ^1.10.0

## Exercises Development
1. Exercises 3.1 or Step 1:  
In step 1 we have to implement a node application that returns hardcoded list of phonebook entries when the user make a get request to http://localhost:3001/api/persons.
2. Exercises 3.2 or Step 2:  
In step 2 we have to implement a page which returns how many entries are in the phonebook and the time of the request when the user make a get request to  http://localhost:3001/info .
3. Exercises 3.3 or Step 3:  
In step 3 we have to implement a page which return information about single contact in the phonebook, when the user make a get request to http://localhost:3001/api/persons/[id of contact].
4. Exercises 3.4 or Step 4:  
In step 4 we have to add a delete functionality which when the user make a delete request to http://localhost:3001/api/persons/[id of contact] it will delete the contact.
5. Exercises 3.5 or Step 5:  
In step 5 we have to add a add contact function which when the user make a post request to http://localhost:3001/api/persons/ , it will make a new contact based on the body of the request.
6. Exercises 3.6 or Step 6:  
In step 6 we have to add a error handler to the post request which will handle errors when the name or number of body of request is missing or the name already exist in the phonebook.
7. Exercises 3.7 or Step 7:  
In step 7 we have to add the morgan middle ware which will log information about request to the console. In this exercises the morgan have to information based on the tiny configuration.
8. Exercises 3.8 or Step 8:  
In step 8 we have to make our own configuration so that morgan will log the desired information on the exercises.
9. Exercises 3.9 or Step 9:  
In step 9 we have to make the phonebook frontend which is from part 2 to work with our backend which we are developing in part 3.
10. Exercises 3.10 or Step 10:  
In step 10 we have to deploy the backend to heroku.
11. Exercises 3.11 or Step 11:  
In step 11 we have to generate a production build of phonebook's front end and add it to our backend and then deploy it to heroku.
12. Exercises 3.12 or Step 12:  
In step 12 we have to create a cloud based mongoDB database for the phonebook with mongoDB atlas, and then we have to make a mongo.js file in the project directory which can be used to adding and listing all entries in the database by passing command line argument.
13. Exercises 3.13 or Step 13:  
In step 13 we have to alter our backend so that it fetches data from the database instead. We also have to make sure the front end is working and put mongoose-specific code and database configuration into it's own module.
14. Exercises 3.14 or Step 14:  
In step 14 we have to alter our backend so that when user add a new contact it will be saved to the database instead. (Previously we add and fetch contact from a variable in backend).
15. Exercises 3.15 or Step 15:  
In step 15 we have to alter our backend so that deleting a phonebook will delete it from the database.
16. Exercises 3.16 or Step 16:  
In step 16 we have to move all error handling of our applicaton to a error handling middle ware.
17. Exercises 3.17 or Step 17:  
In step 17 we have to alter our backend so that it support the update number function when a user add a name that already existed before.
18. Exercises 3.18 or Step 18:  
In step 18 we have to update the handling for route api/persons/:id and info to use the database for fetching information.
19. Exercises 3.19 or Step 19:  
In step 19 we have to add a validator for adding a existing contact to the database, while the front end can prevent adding an existing contact to updating the existing contact, we could attempt it from postman. This can be done using the  mongoose-unique-validator which will throw an error when user attempt to add an already existing contact. We must also handle the error thrown by mongoose-unique-validator.
20. Exercises 3.20 or Step 20:  
In step 20 we have to expand the validation so that the name must be 3 characters long and the number must be atleast 8 digit. The front end must also display an error message when an error occurs.
21. Exercises 3.21 or Step 21:  
In step 21 we have to make sure everything works both front end and backend. Then we make the Full stack by adding the production build of front end to backend then deploy it to heroku.
22. Exercises 3.22 or Step 22:  
In step 22 we have to add Eslint to our project and fix all the warnings.


