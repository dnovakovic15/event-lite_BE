let con = require('../config/connection.js');
let bcrypt = require('bcrypt');

function addUser(userName, password, cb, res){
    bcrypt.hash(password, 5, function( err, bcryptedPassword) {
        let newPassword = bcryptedPassword;
        console.log(newPassword);

        let sql = `INSERT INTO users (name, password) VALUES ("${userName}", "${newPassword}");`

        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}

module.exports = addUser;
<<<<<<< HEAD
=======

// Sign-up page added
// npm install bcrypt
// user-routes updated
// log-in.js updated
>>>>>>> b9b79f7204827ddcdcb86ffeab6380a01a51056a
