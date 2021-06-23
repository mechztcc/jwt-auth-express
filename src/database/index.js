const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://edukimi:alberto123daga@cluster0.giwtb.mongodb.net/edukimi',
 { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;



module.exports = mongoose;