var account = function(){
	
	this.data = {
	number: null,
	name: null,
	amount: null
	};

	this.getInfo = function(){
		return this.data;
	};
	this.fill = function(info){
		for(var prop in this.data){
		if(this.data[prop] !== 'undefined'){
			this.data[prop] = info[prop];
		}
		}
	};
};

module.exports=	function(info,callback){
	var obj = new account();
	obj.fill(info);
	return callback(null,obj);
	
};