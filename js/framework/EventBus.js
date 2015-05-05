EventBus = {
	subscribers:[],
	subscribe:function(subscriberObject, subscriberMethod, Event) {
		var subscriber = {}
		subscriber.object = subscriberObject
		subscriber.method = subscriberMethod
		subscriber.event = Event // []
		this.subscribers[this.subscribers.length]=subscriber
	},
	publish:function(E){
		for(var i=0; i<this.subscribers.length;  i++){
			var params = {}
			var Event = this.subscribers[i].event
			for(j=0; j<Event.length; j++){
				if(Event[j] != E[j]){
					break
				}
			}
			for(k=0; k<E.length; k++){				
				if(typeof E[k] == "object"){
					params = E[k] 
				}
			}
			if(j == Event.length){
				return this.subscribers[i].object[this.subscribers[i].method](params)
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