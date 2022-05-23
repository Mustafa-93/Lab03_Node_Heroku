const express = require('express')
const app = express()
const port = process.env.PORT ||  3000


app.use(express.json())


app.post('/', (req, res) => {
    const { data } = req.body;
    let word_frequency = new Map();
    const wordArray = data.split(" ");
    for (let i = 1; i <= 10; i++)
        word_frequency.set(i, 0)

    wordArray.forEach(word => {
        const sz = word.length
        const val = word_frequency.get(sz);
        word_frequency.set(sz, val + 1)

    });

    const frequency = Object.fromEntries(word_frequency)

    res.send(frequency)

})

app.listen(port, () => {
    console.log(`api is running on ${port}`);
})