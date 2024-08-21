import routes from "./routes";
const express = require('express');
const dotenv = require('dotenv');
const app = express();


dotenv.config();

app.use(express.json());

const PORT = process.env.PORT ||  3030;

app.listen(PORT, () => {
    console.log("rODADANDO NA PORTA",3030);
})

app.use(routes);






