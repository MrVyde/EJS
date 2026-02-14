# EJS
EJS learning

# Express + EJS Server-Side Rendering Demo

A simple Node.js application demonstrating server-side rendering using Express and EJS.

This project focuses on backend fundamentals including dynamic templates, reusable view components, routing, and serving static assets.

---

## Features

- Server-side rendering with EJS
- Dynamic data passed from Express to views
- Reusable components using EJS `include` (Navbar & Footer)
- Nested view directories
- Static asset serving (CSS)
- Multiple routes (`/` and `/about`)
- Looping and variable rendering in templates

---

## Tech Stack

- Node.js
- Express
- EJS (Embedded JavaScript Templates)

---

## Project Structure

project/
│
├── app.js
├── package.json
├── public/
│ └── styles.css
│
└── views/
├── index.ejs
├── about.ejs
├── navbar.ejs
├── footer.ejs
└── users/
└── user.ejs


## Installation

Clone the repository:

git clone https://github.com/yourusername/your-repo-name.git


## Navigate into the project folder:

cd your-repo-name

## Install dependencies:

npm install

## Start the server:

node app.js

Then visit:

http://localhost:3000

---

## Routes

- `/` → Home page
- `/about` → About page

---

## Learning Goals

This project was built to strengthen understanding of:

- Backend fundamentals with Express
- Server-side rendering concepts
- MVC-style structure
- Dynamic template generation
- Reusable view components

---

## Future Improvements

- Move routes into separate router files
- Add form handling (POST requests)
- Connect to a database
- Add authentication
- Improve styling and layout

---

##  Author

Built as part of backend learning and exploration into server-side rendering with Express and EJS.
