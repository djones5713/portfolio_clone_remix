const express = require(`express`);
const app = express();

const port = 5000;
const { 
    getTravelData,
    postTravelCollection,
    updateTravelNotes,
    deleteFromTravelCollection
} = require('./controller/TravelController');

app.use(express.json())
app.get('/api/travel', getTravelData)
app.post('/api/travel', postTravelCollection)
// app.put('/api/travel/:id', updateTravelNotes)
app.delete('/api/travel/:id', deleteFromTravelCollection)


app.listen(port, () => console.log(`server listening to ${port}`))



