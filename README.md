# Project overview

The main objective of this project is to be used to test a Jenkins pipeline:
* It is a basic node.js project which presents a REST API to do some simple mathematical operations
* Has some tests on it to check that the code does not break

We use it to test that a new commit triggers the full Jenkins pipeline on a local installation:
* Pull the new code
* Test that it works
* Execute the needed tests

# Using the code

## Manually runing the code

The node.js code itself can be run manually by executing _node maths.js_. If you want to manually run the tests execute _npx mocha_.

## Needed packages

This project makes use of the following packages (you can install them with _npm install <package>_
* express
* mocha
* chai
* chai-http
