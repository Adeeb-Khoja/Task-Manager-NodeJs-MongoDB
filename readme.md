# Task Manager with NodeJs & MongoDB

Task Manager is a simple backend project in NodeJs and ExpressJs using Typescript. The main purpose of this project is to quick start any new project from this one and copy all the boiler plate code. Setting up NodeJS with Typescript requires multiple steps while setting up a MongoDB connect is simple.
## Installation

Use the package manager npm to install all dependencies.

```bash
npm install
```
To run, just enter the following command whish will run nodemon to restart on code change.

```bash
npm start
```

## Tasks Router

```typescript
import { Router } from "express";
import {createTask, deleteTask, getAll,getByID, updateTask} from '../controllers/Tasks'

const router = Router()

//GET All & POST create task
router.route('/').get(getAll).post(createTask) 

// GET Task by ID, PATCH update Task by ID, DELETE Task by ID  
router.route('/:id').get(getByID).patch(updateTask).delete(deleteTask)

export default router 
```

## Setting up NodeJS with Typescript

Initialize a NodeJs Project, with default settings

```bash
npm init -y
```
Install typescript library

```bash
npm install --save-dev typescript ts-node
```
Create tsconfig.json file and paste these configurations:

```json
{
  "compilerOptions": {
    "lib": ["es6"],
    "allowJs": true,
    "outDir": "build",
    "rootDir": "src",
    "noImplicitAny": true,
    "resolveJsonModule": true,
    "target": "es2016", 
    "module": "commonjs", 
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true, 
    "strict": true, 
    "skipLibCheck": true
  }
}
```

## Setting up Nodemon for Watching File Change

install nodemon

```bash
npm install nodemon
```
Edit package.json file in scripts to this:

```json
"start": "nodemon src/index.ts",
```
## Setting up ESLint for Typescript Linting

install eslint

```bash
npm install --save-dev eslint
```
Then generate the eslint configuration file

```bash
npx eslint --init
```
## One Line Dependencies

```bash
npm install express dotenv mongoose cors nodemon
```
```bash
npm install -D typescript ts-node eslint @types/express @types/cors
```

## License

No License

