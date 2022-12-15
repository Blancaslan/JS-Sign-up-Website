var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dennisceker',
    password: '0987654321',
    database: 'users'
});

connection.connect();

function insertUsers(id, username, password, firstname, lastname, age, location) {
    connection.query('insert into user_data values ' + id + ' "' + username + '" "' + firstname + '"  "' + password + '"  "' + firstname + '" "' + lastname + '" ' + age + ' "' + location + '"', (err, result) => {
      if (err) throw err;
      console.log(result)
    })
}


connection.end()