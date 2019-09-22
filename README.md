## Build a frontend application to consume your final search endpoint using one of the following:
    Angular
## This endpoint containing a json list of jobs listings https://nut-case.s3.amazonaws.com/jobs.json


## Run the application
1. run app in terminal =>   ng serve -o  
2. run test cases      =>   ng test
3. intall dependencies =>   npm install   (if needed)
## Steps to create
1. created angular project  ->  ng new myjobsapp
2. created job componenet in components folder  =>  ng g c components/jobs
3. created service in services folder  =>  ng g s service/jobs
4. in jobs service , created a method "fetchJobs()" to send get request to given url using HttpClient.
5. in job component filter and sorting is done

## Requirements and Output 
1. User select the expirence or location or skill to search jobs
2. Display all expiring job listings
3. Display the total number of jobs found
4. Display the total number of jobs forund base on user search

## Features
1. User is able to sort based on job location and experience
2. User is able to filter based on compnay name

## Good to have
1. Display pagination
2. SSO implementation (could have have implemented if provided information)

## Checklist
1. Code accompanies the Unit Tests
2. Usage is clearly mentioned in the README file, This including setup the project, how to run it, how to run unit test, examples,etc
3. Uses the endpoint directly