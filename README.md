# Basic Server

## Description

This repo is a basic NodeJs API designed to provide the most common features needed to develop any back-end project, such as an auth system and database access.

## Setup

In order to start extending this application, you can

1. Fork the repo and clone it

2. Enter the project folder and install the required modules
   
        cd <your project name> && npm install

3. Open MySQL console and create a new database
   
        mysql -u <your username> 

        mysql> create database <your project name>;

4. Rename the file `.env-example` to `.env` and complete with your MySQL credentials and choose a private key for jwt encryption

        DB_HOST= localhost
        DB_USER= <your username>
        DB_PASSWORD= <your password>
        DB_NAME= <your project name> 

        JWT_PRIVATE_KEY= <random private key>

5. Start the server
   
        npm run

## Usage

The communcation between this server and any consumer application happens through [HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages). For example, a javascript client could fetch a user's info using

        axios.get(<your server ip>/user/getOne, { params: { id: <some id> } })
            .then(response => {
                const user = response.data;

                ...
            });

Both the request and the response are fully customizable, of course.

Basically, when a request arrives, the server redirects it to the routers that map the request url to the apropriate controller which respond with a [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and optionally data.

During development, I suggest you install a HTTP messaging tool like [Insomnia](https://insomnia.rest/download/core/?&ref=https%3A%2F%2Fwww.google.com%2F).

## Features

Currently, the server provides three of the most common required services:

- ### Database Access
    It is possible to create a model for any kind of data that needs to be stored. Later, this data can be retrieved and updated with ease. There are example model, controller and router available.<br><br>

    > Although the project was created using MySQL, all database functions are encapsulated in an interface, making it replaceable (instructions for that bellow).

- ### User Management
    All user management operations like create, delete and update users are already implemented.<br><br>
    
    > The user model (`database/sequelize/models/user.model.js`) is way to simplistic and meant to be extended. 

- ### Auth System
    Once a user is created, it can send its credentials to the system and received back a [JsonWebToken](https://jwt.io/). This token must be set in `request.headers.auth` for all the next requests to ensure user authenticty.<br>
    Besides that, there is a rudimental authorization middleware that check whether a user is admin or not.

## Changing Storage System

Since the server uses a database interface (`database/sequelize/index.js`), all there is to be done is build a similar interface using your storage system. Then, you require it at `database/index.js`. Once you are done, run `npm test` to test the server compability with the new interface.

## Contribuing

The idea behind this repo was to store all kinds of components that may or may not be needed in a project. So, feel free to request features and make pull requests.