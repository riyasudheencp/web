const os=require('os');
var user=os.userInfo();
var platf=os.platform(user);
var network=os.networkInterfaces();
console.log(user);
console.log(platf);
console.log(network);