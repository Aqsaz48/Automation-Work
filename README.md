 
## About The Cypress Automation Project

This project is related to my Cypress Automation Test cases which are designed for the assessment purpose. 
 

### Built With

This Project is built with Cypress Framework to automate the web application test cases.

* Cypress (https://www.cypress.io/)
* Javascript
* Node [Node.js](https://nodejs.org/en)


# Getting Started

# Prerequisites
Before you begin, ensure you have the following installed on your system:

* Cypress.io (Install)
* Node.js (recommended LTS version)
* npm (Node Package Manager)
* Git

# Installation

1- Install the Cypress using command from terminal

```npm install cypress --save-dev```


2- Clone the Repository:

Write the following code on bash

```git clone https://github.com/Aqsaz48/Automation-Work.git```


```cd your-repository```



# Install Dependencies:

Write the command on bash

```npm install```

## Setup the Project

* Go to Vscode
* Open the cloned project from the directory in vscode.
* Go to cypress/e2e/test files e.g. exploreTest.cy.js 
* Open terminal for that file
* Run the command to Open Cypress to execute the tests

```npx cypress open```


It will open an instance of Cypress:
* Now select Chrome or any browser you want to run the tests in (e.g. Chrome in my case)
* Click on Start E2E testing in Chrome.
* An instance for Chrome browser will open for Cypress and it will have all the test and spec files.
* Click on any test file e.g. exploreTest.cy to run this test script.
* On clicking it, test cases will start executing automatically from the script.

## Cypress.config.js File 

In Cypress, the configuration file cypress.config.js is used to set global settings and environment variables that influence how Cypress runs your tests. These settings can include viewport sizes, timeouts, base URL, environment variables, and more.


## Test Scenarios: 

### Registration Flow Test Scenario with Test Cases:

* Test-1: Should load the Registration Form successfully :white_check_mark:
* Test-2: Sign Up with Valid Email ID and Valid Password :white_check_mark:
* Test-3: Sign Up with Invalid Email ID and Valid Password :white_check_mark:
* Test-4: Sign Up with Valid Email ID and Short Password :white_check_mark:
* Test-5: Sign Up with Valid Email ID and Alphabets Only Password :white_check_mark:
* Test-6: Sign Up with Valid Email ID and Numbers Only Password :white_check_mark:
* Test-7: Sign Up with Empty/Blank Registration Form Submit :white_check_mark:
* Test-8: Sign Up with Duplicated Email Address which Already Exists :white_check_mark:

### Demo Video Link for Registration Flow Scenario: https://youtu.be/F8vWeEKYXm8

<div align="center">
  <a href="https://youtu.be/F8vWeEKYXm8">
    <img src="https://i9.ytimg.com/vi_webp/F8vWeEKYXm8/mq3.webp?sqp=CMCv37QG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACzgWKAgwIABABGEQgSShlMA8=&rs=AOn4CLDh4l2U_8NCovBGDKh7fu5-Hk2F_Q" alt="Watch the video" style="width:80%;">
  </a>
</div>

## Search Bar Test Scenario with Test Cases:

* Test-1: Check the Visiblity of Search Bar on Webpage :white_check_mark:
* Test-2: Search for valid Content in the Search Bar and validate results :white_check_mark:
* Test-3: Search for valid content from the Search Recommendations and validate results :white_check_mark:
* Test-4: Search for Invalid Data in the Search Bar and validate results :white_check_mark:


### Demo Video Link for Search Bar Scenario: 

<div align="center">
  <a href="https://youtu.be/zBHJ4Xj2guE">
    <img src="https://i9.ytimg.com/vi_webp/zBHJ4Xj2guE/mq3.webp?sqp=CMCv37QG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACzgWKAgwIABABGEUgSihlMA8=&rs=AOn4CLDi2L9LVgPIs0iljjPL9prGcaC-LQ" alt="Watch the video" style="width:80%;">
  </a>
</div>




## Explore Filters Test Scenario with Test Cases:

* Test-1: Check if Explore Button is present and visible on the webpage :white_check_mark:
* Test-2: Go to Explore Screen to Apply Type "Events" Filter and validate results :white_check_mark:
* Test-3: Go to Explore Screen to Apply Zone Filter and validate results :white_check_mark:
* Test-4: Clear the Applied Zone Filter and validate results :white_check_mark:
* Test-5: Go to Explore Screen to to Apply Experiences Filter and validate results :white_check_mark:
* Test-6: Apply Experiences Filter and Zone Filter Combined and validate results :white_check_mark:

### Demo Video Link for Explore Filters Scenario: 

<div align="center">
  <a href="https://youtu.be/zBHJ4Xj2guE">
    <img src="https://i9.ytimg.com/vi_webp/4Ex5z9As66o/mq2.webp?sqp=CMCv37QG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACzgWKAgwIABABGEYgSyhlMA8=&rs=AOn4CLBzuZCZt0H9dkuel7FbCVw9OvtrMQ" alt="Watch the video" style="width:80%;">
  </a>
</div>


## Recommendations for Improvements for best practices in Web Application

Benefits of Using Unique IDs and Class Locators

* Improved Maintainability:
Unique IDs and class locators make it easier to update and manage elements, reducing the likelihood of conflicts and errors during development.

* Enhanced Testability:
Consistent and unique element identifiers facilitate more robust automated testing, allowing tools like Cypress, Selenium, and others to interact with elements reliably.

* Increased Readability:
Clear and descriptive IDs and class names improve the readability of your HTML and CSS, making it easier for developers to understand and navigate the codebase.

* Better Performance:
Using unique IDs and classes can improve the performance of CSS and JavaScript selectors, as they provide faster and more efficient ways to access elements in the DOM. 

