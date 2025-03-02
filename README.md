# Note Taking App 

This is a simple note-taking application built with React. It allows users to register an account, login, logout, create personalize notes and store the data in their account.

## Setting up the Project Locally

Link to project **`<https://github.com/natcha-hong/nh-notesapp>`**

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/natcha-hong/nh-notesapp.git>

2. **Install dependencies for frontend and backend:**

    ```bash
    cd <project_directory> [for example <C:\Users\Administrator\Desktop\nh\backend>]
    npm install

3. **Start the development server for backend and frontend:**
    ```bash
    npm run dev


4. Backend - create Auth Routes in POSTMAN [API endpoints listed below]

#### API Endpoints 
Register | POST http://localhost:4000/auth/register <br/>
Login | POST http://localhost:4000/auth/login <br/>
Logout | POST http://localhost:4000/auth/logout <br/>
CreateNote | POST http://localhost:4000/notes/createnote<br/>
UpdateNotes | PUT http://localhost:4000/notes/updatenotes <br/>
DeleteNote | DELETE http://localhost:4000/notes/deletenote <br/>
GetNotes | GET http://localhost:4000/notes/getnotes <br/>

5. Backend - connect to MongoDb

#### Database in MongoDB
mongodb://localhost:27017/notesapp<br/>
which has 2 folder inside including **notes** and **users** to store data from users and notes that each user created.

6. Frontend - connect vite listed below<br/>
Home | http://localhost:5173/<br/>
Register | http://localhost:5173/register<br/>
Login | http://localhost:5173/login


# Difficulties and Challenges
1. mongodb is not connect locally the in .env mongodb://localhost:27017/ which the solution is MONGODB_URL=mongodb://127.0.0.1:27017/notesapp
2. one simple misspelling can caused an error and it is very difficult to find
3. using lowercase or uppercase wrong ex. onclick => onClick would cause an error and it is very difficult to find
4. need to use the right function to get the right result
