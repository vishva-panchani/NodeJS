const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
  'mca',
  'root',
  '',
   {
     host: 'localhost',
     port: 3306,
     dialect: 'mysql'
   }
 );

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthdate: DataTypes.DATE,
}, {
  tableName: 'users', // Optional: Custom table name
      timestamps: false        // Disable timestamps like createdAt, updatedAt
  });

async function Test(){
  const jane = await User.create({
    username: 'pari',
    birthday: new Date(2054, 6, 24),
  });
  
  const users = await User.findAll();
  console.log(users)
}

Test()