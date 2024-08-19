import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res)=>{
    console.log('hello from express');
    res.status(200)
    res.json({message: 'hello from express'})
})

app.use('/api', router)


app.listen(8000, ()=>{
    console.log('server running on port 8000');
})
