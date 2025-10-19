# express-skeleton

An Express.js template built along with [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) to jumpstart any Express project. This directory will already have installed the necessary packages, set up the Model-View-Controller design pattern, and make it easy to create and link your PostgreSQL database. Form validation and authentication currently not included but will be in the future.

## Installation

- Clone the repository to your local computer:

```bash
git clone git@github.com:your-username/express-template.git
```

- Go to GitHub and create a new repository
- Fill out necessary information
- When you reach the "Start with a template" field, choose the "express-template" repository
- Clone the new repository to your local computer and navigate to it
- Install dependencies

```bash
npm install
```

- Create a ```.env``` file and add these environment variables

```
// Feel free to change as needed!
PORT=5432
DATABASE_URL="postgresql://<role_name>:<role_password>@localhost:5432/your_database"
```

- Start the Node server

```bash
node --watch app.js
```

And enjoy!

## Linting and Formatting

Linting and formatting isn't installed here because they can be configured differently depending on the project's need. Therefore, consult ESLint and Prettier's documentation to see how to install and run them on your project! It is HIGHLY recommended and will help you make your code much more readable and maintainable.

- [ESLint Quick Start Guide](https://eslint.org/docs/latest/use/getting-started)
- [Prettier's Install Documentation](https://prettier.io/docs/install.html)


