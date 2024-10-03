const mysql=require('mysql');

const db =mysql.createConnection({
    host:'localhost',
    user:'root',  //your mysql Username
    password: '', //your mysql password
    database: 'mca'
});

//connct to MySQL
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected..');
});

module.exports = db