let sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect,
	should = chai.should(),
	Greeting =  require("./app.js");

describe("Greeting App", function(){
	xit("should test if greetings exist", function(){

		var app = new Greeting();
		expect(app).to.be.an('object');
	})

	it("should check if name arguement was passed", function(){

		var expected_name = "jack"; 
		var app = new Greeting(expected_name);
		expect(app.name).to.equal(expected_name);

	})

	it("Should check if a default name is given", function(){
		var app = new Greeting();
		expect(app.name).to.not.be.null;
	})

	it("Should tell if greeting was called", function(){

		var app = new Greeting();
		var greet_spy = sinon.spy(app, "greet");
		app.greet();
		app.greet();
		expect(greet_spy.calledTwice).to.be.true;

	})

	it("Should tell if a message is passed with a name", function(){

		let expectedMessage = "Hello, Lee",		
		    app = new Greeting(),
		    expectedResult = app.greet("Hello, ");
		    console.log(expectedResult);

		expect(expectedResult).to.equal(expectedMessage);
	})
})