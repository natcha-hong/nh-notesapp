# Note Taking App 

This is a simple note-taking application built with React. It allows users to register an account, login, logout, create personalize notes and store the data in their account.

## Difficulties and Challenges
1. mongodb is not connect locally the in .env mongodb://localhost:27017/ which the solution is MONGODB_URL=mongodb://127.0.0.1:27017/notesapp
2. one simple misspelling can caused an error and it is very difficult to find
3. using lowercase or uppercase wrong ex. onclick => onClick would cause an error and it is very difficult to find
4. need to use the right function to get the right result


## How To Setting up the Project Locally

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

* Register | POST http://localhost:4000/auth/register <br/>
* Login | POST http://localhost:4000/auth/login <br/>
* Logout | POST http://localhost:4000/auth/logout <br/>
* CreateNote | POST http://localhost:4000/notes/createnote<br/>
* UpdateNotes | PUT http://localhost:4000/notes/updatenotes <br/>
* DeleteNote | DELETE http://localhost:4000/notes/deletenote <br/>
* GetNotes | GET http://localhost:4000/notes/getnotes <br/>


#### Expected Result
* Expected Result in Register =>

{
    "success": true,
    "message": "User Register Successfully",
    "User": {
        "userName": "natcha",
        "email": "test_natcha@gmail.com",
        "password": "$2b$10$BNwxhhez41efTbmEFXcR6udm4cNelC5jqpzGbNlV.5pAE9ciGomPu",
        "_id": "67c3ed1fac7b0d7f33ea76da"
    }
}

 * Expected Result in Login =>

{
    "success": true,
    "message": "Login Successfully",
    "user": {
        "_id": "67c3ed1fac7b0d7f33ea76da",
        "userName": "natcha",
        "email": "test_natcha@gmail.com",
        "password": "$2b$10$BNwxhhez41efTbmEFXcR6udm4cNelC5jqpzGbNlV.5pAE9ciGomPu",
        "createdAt": "2025-03-02T05:31:11.647Z",
        "updatedAt": "2025-03-02T05:31:11.647Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2MzZWQxZmFjN2IwZDdmMzNlYTc2ZGEiLCJpYXQiOjE3NDA4OTM1NDYsImV4cCI6MTc0MTE1Mjc0Nn0.N8GPyHXKvUZSHAYH0mxO5pKpftsjO5nEtNHG0NecnR8"
}

* Expected Result in Logout =>

{
    "success": true,
    "message": "User Logout Successfully"
}

* Expected Result in CreateNote =>

{
    "success": true,
    "message": "Notes created successfully",
    "Notes": {
        "title": "The First Note",
        "userId": "67c3ed1fac7b0d7f33ea76da",
        "_id": "67c3ed95ac7b0d7f33ea76de",
        "createdAt": "2025-03-02T05:33:09.479Z",
        "updatedAt": "2025-03-02T05:33:09.479Z",
        "__v": 0
    }
}

* Expected Result in UpdateNotes =>

{
    "success": true,
    "message": "Notes update successfully",
    "UpdateNotes": {
        "_id": "67c3ed95ac7b0d7f33ea76de",
        "title": "Update Note",
        "userId": "67c3ed1fac7b0d7f33ea76da",
        "createdAt": "2025-03-02T05:33:09.479Z",
        "updatedAt": "2025-03-02T05:35:10.117Z",
        "__v": 0
    }
}

* Expected Result in DeleteNote =>

{
    "success": true,
    "message": "Notes deleted successfully",
    "DeletedNote": {
        "_id": "67c3bc7829fdc4afbadda311",
        "title": "Update Note ",
        "userId": "67c3bc5c29fdc4afbadda2f7",
        "createdAt": "2025-03-02T02:03:36.306Z",
        "updatedAt": "2025-03-02T02:05:41.485Z",
        "__v": 0
    }
}

* Expected Result in GetNotes =>

{
    "success": true,
    "Notes": [
        {
            "_id": "67c3ed95ac7b0d7f33ea76de",
            "title": "Update Note",
            "userId": "67c3ed1fac7b0d7f33ea76da",
            "createdAt": "2025-03-02T05:33:09.479Z",
            "updatedAt": "2025-03-02T05:35:10.117Z",
            "__v": 0
        }
    ]
}


5. Backend - connect to MongoDb

#### Database in MongoDB
mongodb://localhost:27017/notesapp<br/>
which has 2 folder inside including **notes** and **users** to store data from users and notes that each user created.

6. Frontend - connect vite listed below<br/>
Home | http://localhost:5173/<br/>
Register | http://localhost:5173/register<br/>
Login | http://localhost:5173/login
