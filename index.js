const app = require('./src/app')

const port = 4001;

app.listen(port, () => {
   console.log( `Listening on port ${port}` );
})