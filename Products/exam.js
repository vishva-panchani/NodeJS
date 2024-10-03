const event = require('events');

class Exam extends event.EventEmitter {}
const exam=new Exam()

exam.on('start',()=>
{
    console.log('Exam Starting...');
});

exam.on('end',()=>
{
    console.log('Exam Ending...');
});
exam.on('submission',()=>
    {
        console.log('Exam Submission..');
    });
setTimeout(()=>
    {
        exam.emit('start')
    },2000);
setTimeout(()=>
    {
        exam.emit('end')
    },3000);
setTimeout(()=>
    {
        exam.emit('submission')
    },4000);