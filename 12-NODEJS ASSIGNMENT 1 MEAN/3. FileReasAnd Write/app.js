var fs=require('fs');
var text='';
fs.readFile('./test.txt',(err,data)=>{

	console.log(''+data);
		text=data;
})


setTimeout(function () {
fs.writeFile('message.txt', text, (err) => {
  console.log('The file has been saved!');
});

}, 1000); 