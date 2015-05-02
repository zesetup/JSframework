UserController  = {
	eventHandler:function(event){
		alert("UserController:"+event)
	}
}

//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}