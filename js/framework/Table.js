function Table(){
	var eventHandlerObject={},
	eventHandlerMethod="",
	data={}
	data.header=[]
	data.rows=[]
	this.show =function(){
		// get data from a data source
		data = eventHandlerObject[eventHandlerMethod]("table", "getDataSet")
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