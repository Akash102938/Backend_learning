import express from 'express'

const app = express()

app.get('/', (req,res)=>{
   res.send('server is ready')
})
app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'this is my joke'

        },
        {
            id:2,
            title: 'This is another joke'
        }
    ]
    res.send(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
    
})