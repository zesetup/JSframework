EventBus = {
	eventHandlers:[],
	addEventHandler:function(eventHandlerObject, eventHandlerMethod, Event) {
		var eventHandler = {}
		eventHandler.object = eventHandlerObject
		eventHandler.method = eventHandlerMethod
		eventHandler.event = Event // []
		this.eventHandlers[this.eventHandlers.length]=eventHandler
	},
	call:function(E){
		for(var i=0; i<this.eventHandlers.length;  i++){
			var Event = this.eventHandlers[i].event
			for(j=0; j<Event.length; j++){
				if(Event[j] != E[j])
					break
			}
			//alert(j +"=="+Event.length)
			if(j == Event.length){
				this.eventHandlers[i].object[this.eventHandlers[i].method](E.params)
			}
		}
	}
}

//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}