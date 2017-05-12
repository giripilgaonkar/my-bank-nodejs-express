var accounts = require('../data');
var account = require('../account');

console.log(accounts);



exports.account =function(req,res){
	console.log(accounts);
	var number = req.param ('number');
	for(var number1 in accounts){
	//accounts[number] = account(accounts[number]);
	account(accounts[number1],function(err,data){
		accounts[number1]=data;
		console.log('inside call');
	})
	console.log('here we are');
}
	if(typeof accounts[number] === 'undefined')
		res.status(404).json({status:'Not found'});
	else
		res.json(accounts[number].getInfo());
};
