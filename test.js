let sinon = require('sinon'),

    chai = require('chai'),

    expect = chai.expect,

    should = chai.should(),

    Core = require("./core.js"),

    modules;


describe("modules", function() {

    var core;

    before(function() {

        core = new Core();
    });

    it("should test if the property modules exists", function () {

        expect(core).to.have.property("modules");

    });


    it("should test if module exists as an object", function() {

        expect(core.modules).to.be.an("object");
    })

    describe("add module method", function () {
        
        it("should test if method addModule registers a module", function () {

            var moduleID = "chat",
                module = function chatModule() { },
                addModuleSpy = sinon.spy(core, 'addModule')

            core.addModule(moduleID, module);

            expect(core.modules).to.have.property(moduleID)
            expect(core.modules[moduleID]).to.equal(module);
            sinon.assert.calledOnce(addModuleSpy)

            addModuleSpy.restore()
        })
    })

    describe("registerEvent method", function () {
        
        it("should throw an error if the first argument is not a valid object", function() {

            var expectedArg = function noop() {};

            expect(function() {
                core.registerEvents(expectedArg, "anymodule")
            }).to.throw()
        })

        it("should register an event on an existing module", function() {

            var moduleID = "search",
                module    = function() {},
                evt       = {type:"fire", data:"laura"},
                registerEventSpy = sinon.spy(core, "registerEvents");

            core.addModule(moduleID, module);
            core.registerEvents(evt, moduleID);

            expect(core.modules[moduleID]).to.have.property("events");
            expect(core.modules[moduleID]['events']).to.equal(evt);
            sinon.assert.calledOnce(registerEventSpy)

            registerEventSpy.restore();
        })

    
    })

    describe("triggerEvent method", function(){

    	it("should test if a registered event has property type", function(){

    		var evt = {type:"fire", data:"laura"},
    			moduleID = "search",
    			triggerEventSpy = sinon.spy(core, "triggerEvents");

    		core.triggerEvents(evt)

    		//expect(core.modules[moduleID].events).to.have.property("type");
    		//expect(core.modules[moduleID].events.type).to.not.be.null;
    		sinon.assert.calledOnce(triggerEventSpy)

    		triggerEventSpy.restore()

    	})

    	it("should test if an event is triggered, on the modules", function(){
    	})
    	
    })


})