function Table(n){
	var eventHandlerObject={},
	eventHandlerMethod="",
	name,
	data={}
	data.headers=[]
	data.rows=[]
	name=n
	this.show =function(){
		// get data from a data source
		var event = {}
		event.source = "table"
		event.command = "getDataSet"
		event.callerName = name
		data = eventHandlerObject[eventHandlerMethod](event)
		alert(data.headers.length)
	}
	this.setEventHandler = function(object, method){
		eventHandlerObject = object
		eventHandlerMethod = method
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}