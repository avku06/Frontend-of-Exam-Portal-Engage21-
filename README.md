# Microsoft Engage 2021 Project : Online Exam Portal

### Frontend with Angular
Github Repository for Online Exam Portal Frontend Code [ https://github.com/pearlgupta2000/Frontend-of-Exam-Portal-Engage21- ](https://github.com/pearlgupta2000/Frontend-of-Exam-Portal-Engage21-)

### Backend with Springboot
Github Repository for Online Exam Portal Backend Code[ https://github.com/pearlgupta2000/Backend-of-Exam-Portal-Engage21-- ](https://github.com/pearlgupta2000/Backend-of-Exam-Portal-Engage21--)

### MySQL Database Used

---

## Requirements with given Versions

Node: 16.13.0 <br>
Package Manager: npm 8.1.0<br>
Angular CLI: 13.0.3 <br>
java version "1.8.0_301" <br>
javac 1.8.0_301 <br>
Apache Maven 3.8.4 <br>
MySQL Workbench 8.0 <br>

Set the environment variables properly

---

## Local Setup of Project

1. Create a New Folder and clone both Frontend and Backend Repositories inside that folder.

2. Open cmd, go inside the frontend folder and execute following commands : <br>
   a). `npm install -g @angular/cli` <br>
   b). `npm install --scripts-prepend-node-path=auto` <br>
   c). `ng serve` (Runs frontend app) <br>

Frontend angular application started at `http://localhost:4200/`

3. Open MySQL Workbench and create a new database by executing `create database database_name`.

4. In the backend folder and change database connection details in `/src/main/resources/application.properties` file. <br>
   a). spring.datasource.url = jdbc:mysql://localhost:3306/`database_name`?serverTimezone=UTC <br>
   b). spring.datasource.username = `root` <br>
   c). spring.datasource.password = `password` <br>

5. Open cmd, go inside the backend folder and execute following commands : <br>
   a). `mvn install` <br>
   b). `mvn spring-boot:run` (Runs backend app) <br>

Backend Springboot application started at `http://localhost:8080/`

#### Navigate to `http://localhost:4200/`. <br>

( After running the backend application Admin is automatically created and its details are stored in the users table of your local database )<br>

( For logging in the admin account you can see the details of automatically created admin like username and password in `/src/main/java/com/exam/ExamserverApplication.java ` file of Backend folder) <br>
Username : admin123 <br>
Password : admin <br>

(For logging in as normal user/student you can first register and then sign in with the same details)

---

Donot change any frontend file by mistake because the app will automatically reload if you change any of the source files.<br>

---

## Features of Online Exam Portal

1. There are two types of Users in this Web application <br>
   a). Admin <br>
   b). Normal User (Student)

2. Single Login Page for both Admin and Normal Users <br>
   a). Json Web Tokens based authentication is integrated having expiration time of 60 minutes. <br>
   ie. if User does not logout manually, he will be logged out automatically after 60 minutes.

3. User Registration Page for Normal Users only. <br>
   a). Each user must have unique Username <br>
   b). Email and Phone number(assumed that the phone num is of India and starts with 6-7-8-9) validation is included

5. Features of an Admin Account : <br>
   a). Add and View Available Subjects <br>
   b). Add, View, Update, Publish(so that its visible to Students) and Delete Quizzes in any subject <br>
   c). Filter Quizzes according to the Subject <br>
   d). Add and Delete mcq type Questions in any Quiz of any Subject <br>
   e). See how many students have attempted specific Quiz and all the details like Marks Obtained by Students <br>
   f). View its Profile

6. Features of a Normal User (Student) : <br>
   a). Can attempt quizzes of any subject <br>
   b). View all published quizzes subject wise <br>
   c). Once the quiz is attempted by the user, the user cannot re-attempt that quiz <br>
   d). View the marks got in any quiz <br>
   e). After attempting the quiz, user can download the result in pdf format <br>
   f). View its Profile

7. Quiz <br>
   a). Out of all the questions added in the quiz by the admin, only specified number of shuffled questions will be shown to each user in the quiz <br>
   b). Questions in the quiz can be different for different user/student <br>
   c). Quiz starts in a new window with a timer <br>
   d). Right click, reload and going back is prevented in the test <br>
   e). After the test is submitted, server side evaluation is done and marks are shown to the user as well as added in the database <br>
   f). User/Student can download the result in pdf format

---

### Useful Links
1. [https://nodejs.org/en/download/](https://nodejs.org/en/download/) <br>
2. [https://www.javatpoint.com/how-to-install-maven](https://www.javatpoint.com/how-to-install-maven)
3. [https://stackoverflow.com/questions/46623571/angular-ng-command-not-found/46623602](https://stackoverflow.com/questions/46623571/angular-ng-command-not-found/46623602)
