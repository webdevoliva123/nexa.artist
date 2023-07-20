const app = require("./app");

// MAKE SERVER
const PORT = 3000 || process.env.PORT 

app.listen(PORT,() => {
    return console.log(`NEXA SOUND SERVER STARTED`)
})