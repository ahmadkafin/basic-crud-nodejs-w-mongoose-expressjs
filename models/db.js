const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log('Mongo Connection Succeed')}
    else {console.log('error in DB Connection : ' + err)}
});

require('./employee.model');

