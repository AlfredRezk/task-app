const {connect} = require('mongoose')

module.exports = async()=>{
    try{
      const mongo = await connect(process.env.MONGODB)
      console.log(`Connected to DB ${mongo.connection.host}`.yellow.underline)
    }catch(error){
        console.log(`Could not connect with DB: ${error.message}`.red)
    }
}