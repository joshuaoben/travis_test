function Greeting(name){

	this.name = name || "Lee";	
}

Greeting.prototype.greet = function(message){

	return message + this.name;
}


module.exports = Greeting;