# 14-Model-View-Controller-MVC
Tech Blog

## Table of Contents

* [Description](#Description)
* [Requirements](#Requirements)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Badges](#Badges)
* [Issues](#Issues)
* [Technologies](#Technologies)
* [Screenshot](#screenshot)
* [Deployment](#deployment)
* [Contributing](#Contributing)
</br>
</br>

## Description
EA CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. This application is an example of the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
<br>
<br>

## Requirements
#### User Story
>AS A developer who writes about tech, I WANT a CMS-style blog site. SO THAT I can publish articles, blog posts, and my thoughts and opinions.
<br>

>GIVEN a CMS-style blog site
<br>

>WHEN I visit the site for the first time<br>
>>THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>

>WHEN I click on the homepage option<br>
>>THEN I am taken to the homepage<br>

>WHEN I click on any other links in the navigation<br>
>>THEN I am prompted to either sign up or sign in<br>

>WHEN I choose to sign up<br>
>>THEN I am prompted to create a username and password<br>

>WHEN I click on the sign-up button
>>THEN my user credentials are saved and I am logged into the site<br>

>WHEN I revisit the site at a later time and choose to sign in
>>THEN I am prompted to enter my username and password<br>

>WHEN I am signed in to the site
>>THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>

>WHEN I click on the homepage option in the navigation
>>THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>

>WHEN I click on an existing blog post
>>THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>

>WHEN I enter a comment and click on the submit button while signed in
>>THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>

>WHEN I click on the dashboard option in the navigation
>>THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>

>WHEN I click on the button to add a new blog post
>>THEN I am prompted to enter both a title and contents for my blog post<br>

>WHEN I click on the button to create a new blog post
>>THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>

>WHEN I click on one of my existing posts in the dashboard
>>THEN I am able to delete or update my post and taken back to an updated dashboard<br>

>WHEN I click on the logout option in the navigation
>>THEN I am signed out of the site<br>

>WHEN I am idle on the page for more than a set time
>>THEN I am automatically signed out of the site 
<br>
<br>

## Installation
To use this application, please install: 
```
npm install
npm install mysql2
npm install sequelize
npm install express 
npm install express-handlebars 
npm install express-session 
npm install mysql2 
npm install bcrypt 
npm install connect-session-sequelize
```

<br/>
<br/>

## Usage
After cloning the repo and installing the required npm packages, use the command line to navigate to the root of the application and from the project root folder enter the sql shell and run the following command: 
```
source db/schema.sql
```
Exit the sql shell and Run the following commands:
```
npm run seed
npm start
```

<br/>
<br/>

## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</br>
</br>

## Badges
![GitHub repo size](https://img.shields.io/github/repo-size/jorgeebn16/mvc-challenge-tech-blog)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jorgeebn16/mvc-challenge-tech-blog)
![Most recent commit](https://img.shields.io/github/last-commit/jorgeebn16/mvc-challenge-tech-blog)
![GitHub top language](https://img.shields.io/github/languages/top/jorgeebn16/mvc-challenge-tech-blog)
</br>
</br>

## Issues
[![GitHub issues](https://img.shields.io/github/issues/jorgeebn16/mvc-challenge-tech-blog.svg)](https://GitHub.com/jorgeebn16/mvc-challenge-tech-blog/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/jorgeebn16/mvc-challenge-tech-blog.svg)](https://GitHub.com/jorgeebn16/mvc-challenge-tech-blog/issues?q=is%3Aissue+is%3Aclosed)
</br>
</br>

## Technologies
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Sessions](https://www.npmjs.com/package/express-session)
* [Bcrypt](https://www.npmjs.com/package/bcryptjs)
* [Handlebars](https://www.npmjs.com/package/handlebars)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [npm](https://www.npmjs.com/)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://sequelize.org/)
<br/>
<br/>

## Screenshot
![Application Preview](./assets/images/screenshot.png)
![Application Preview](./assets/images/screenshot1.png)
![Application Preview](./assets/images/screenshot2.png)
![Application Preview](./assets/images/screenshot3.png)
![Application Preview](./assets/images/screenshot4.png)
![Application Preview](./assets/images/screenshot5.png)
![Application Preview](./assets/images/screenshot6.png)

</br>
</br>

## Deployment
View [Heroku App](https://mvc-challenge-tech-blog.herokuapp.com/)

## Contributing
[![GitHub contributors](https://img.shields.io/github/contributors/jorgeebn16/mvc-challenge-tech-blog.svg)](https://GitHub.com/Naereen/jorgeebn16/mvc-challenge-tech-blog/graphs/contributors/)

For anyone who wishes to contribute you can contact me with at jorgeebn16@gmail.com
</br>
</br>

Would you like to reach me?
</br>
Contact Me:

Github: https://github.com/jorgeebn16</br>
Email: jorgeebn16@gmail.com


## Issues
[![GitHub issues](https://img.shields.io/github/issues/jorgeebn16/mvc-challenge-tech-blog.svg)](https://GitHub.com/jorgeebn16/mvc-challenge-tech-blog/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/jorgeebn16/mvc-challenge-tech-blog.svg)](https://GitHub.com/jorgeebn16/mvc-challenge-tech-blog/issues?q=is%3Aissue+is%3Aclosed)


