const EventEmitter=require('events');

class UserEventEmitter extends EventEmitter{}
const userEventEmitter= new UserEventEmitter();

userEventEmitter.on('userRegistered',(user)=>{
    console.log(`User registered:${user.name}`);
    sendwelcomeEmil(user);
});

function sendwelcomeEmil(user)
{
    console.log(`sending welcome email to ${user.email}`);
}
 
function registerUser(name,email)
{
    const user={ name,email};
    console.log('Registereing user email..');
    userEventEmitter.emit('userRegistered',user);
}


registerUser('Vishva','vishu@gmail.com');
registerUser('krushi','kishu@gmail.com');

