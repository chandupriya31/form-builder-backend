const mongoose = require('mongoose')
const configDB = async () => {
    const url = process.env.DB_URL
    const name = process.env.DB_NAME
    try {
        await mongoose.connect(`${url}/${name}`)
        console.log('connected to db')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = configDB