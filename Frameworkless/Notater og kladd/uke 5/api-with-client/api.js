const express = require('express');
const axios = require('axios')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
const delayedUrl = 'https://httpbin.org/delay/3';

function sleepSync(milliseconds) {
    const start = Date.now()
    while (Date.now() - start < milliseconds){}
}

app.post('/sync-read', (req,res) => {
    const { callCounter } = req.query
    console.log(`starting ${callCounter}`)
    sleepSync(3000)
    res.send({ message: 'Sync call completed', data: {}})
    console.log(`finished ${callCounter}`)
})

app.post('/async-read', async (req, res) => {
    try {
        const { callCounter } = req.query
        console.log(`starting ${callCounter}`)
        const response = await axios.get(delayedUrl);
        res.send({ message: 'Async call completed', data: response.data });
        console.log(`finished ${callCounter}`);
    } catch {
        res.status(500).send({error: 'Error in sync call'})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})