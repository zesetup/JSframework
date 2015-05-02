Controller = {
	userControllerObject:{},
	userControllerMethod:"",
	init:function(){
		window.status="init"
	},
	eventHandler:function(event){
		userControllerObject[userControllerMethod](event)
	},
	setUserControllerEventHandler:function(object, method){
		userControllerObject = object
		userControllerMethod = method
	}
}

//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}