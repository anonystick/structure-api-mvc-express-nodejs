const mongoose = require('mongoose')

//connect mongoose
mongoose.connect( process.env.MONGO_URI).then( _ => console.log('Connected mongoose success!...'))
.catch( err => console.error(`Error: connect:::`, err))

// all executed methods log output to console
mongoose.set('debug', true)
    
// disable colors in debug mode
mongoose.set('debug', { color: false })

// get mongodb-shell friendly output (ISODate)
mongoose.set('debug', { shell: true })


module.exports = mongoose;