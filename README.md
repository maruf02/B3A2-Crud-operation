# Backend Crud operation in TypeScript with mongoose

## how to run in this application in locally:

### Instruction:

- Firstly clone/download this git repository
- Then install following command:

```tsc
 npm i express typescript mongoose cors dotenv zod
```

- After installing that command please install this command

```tsc
npm i --save-dev @types/node
npm i --save-dev @types/express
npm i --save-dev @types/cors
```

- After that create a file `.env`. and insert your `port` and `database_url`. for that following this:

```tsc
NODE_ENV=production
PORT="your port"
DATABASE_URL="your_mongoDb_Connection_URL"
```

- the set up is almost complete.
- Now run the server this command:

```tsc
npm run start:dev
```

### now your server is start and you can see it two place that is after run this command it will show `Example app listening on port "your_assign_port"` and go to your browser and type `http://localhost:"your_port"` then it wil show a text that is `hello world`.

### Now you Hit you desire api and work with server.

### Thanks.
