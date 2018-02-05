
function Core() {

    this.modules = {};

}

Core.prototype = {

    addModule: function (module_id, mod) {

        this.modules[module_id] = mod;
    },

    registerEvents: function (evt, module_id) {

        if(typeof evt !== 'object')
            throw "expected first argument evt to be an object"

        var themod = this.modules[module_id]
        themod.events = evt
    },

    triggerEvents: function (evt) {

    	for(mod in this.modules){
			if (this.modules.hasOwnProperty(mod)) {
				mod = this.modules[mod];
				if (mod.events && mod.events[evt.type]) {
					mod.events[evt.type](evt.data);
				}
			}
		}

    }
}
module.exports = Core;