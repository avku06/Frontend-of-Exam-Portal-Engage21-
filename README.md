# Microsoft Engage 2021 Project : Online Exam Portal 

### Frontend with Angular 
Github Repository for Online Exam Portal [ Frontend Code ](https://github.com/pearlgupta2000/Frontend-of-Exam-Portal-Engage21-) 

### Backend with Springboot
Github Repository for Online Exam Portal [ Backend Code ](https://github.com/pearlgupta2000/Backend-of-Exam-Portal-Engage21--)

### MySQL Database Used

---

# Local Setup of Project

1. Create a New Folder and clone both Frontend and Backend Repositories inside that folder.

2. Open cmd, go inside the frontend folder and execute following commands : <br>
  a). `npm install -g @angular/cli` (node.js should be installed before executing commands) <br>
  b). `npm install --scripts-prepend-node-path=auto` <br>
  c). `ng serve` <br>

Frontend angular application started at `http://localhost:4200/`

3. Open MySQL Workbench and create a new database by executing `create database database_name`.

4. Open the backend folder and change database connection details in `/src/main/resources/application.properties` file. <br>
  a). spring.datasource.url = jdbc:mysql://localhost:3306/`your database name`?serverTimezone=UTC <br>
  b). spring.datasource.username = `root` <br>
  c). spring.datasource.password = `password` <br>

5. Run the backend application by clicking on Run Application.

( After running the backend application Admin is automatically created and its details are stored in the users table of your local database )<br>

( For logging in the admin account you can see the admin details like username and password in `/src/main/java/com/exam/ExamserverApplication.java ` file )

Backend Springboot application started at `http://localhost:8080/`

#### Navigate to `http://localhost:4200/`. <br>

---

Donot change any frontend file by mistake because the app will automatically reload if you change any of the source files.<br>


Angular CLI: 13.0.3<br>
Node: 16.13.0<br>
Package Manager: npm 8.1.0<br>
java version "1.8.0_301"
