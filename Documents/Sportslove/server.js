const express = require('express');
const app = express();


app.set('port', 1995);



app.get('/',function(req,res){
    res.send('This is a root route')
})

app.listen(app.get('port'),function(){
    console.log('app listen at port: 1995');
})