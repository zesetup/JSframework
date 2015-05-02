Controller = {
	userControllerObject:{},
	userControllerMethod:"",
	init:function(){
		window.status="init"
	},
	eventHandler:function(event){
		userControllerObject[userControllerMethod](event)
	},
	setUserController:function(object, method){
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