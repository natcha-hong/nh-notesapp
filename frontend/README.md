# Note Taking App 

This is a simple note-taking application built with React. It allows users to register an account, login, logout, create personalize notes and store the data in their account.

## Setting up the Project Locally

Link to project **`<repository_url>` and `<project_directory>` **

1. **Clone the repository:**

   ```bash
   git clone <repository_url>

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

