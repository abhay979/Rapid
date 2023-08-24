const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://abhaysahu979:abhay@rapid.opkurym.mongodb.net/rapid?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db