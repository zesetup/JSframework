var jsScriptTotalCount=4
Main = {
	start:function(){
		Controller.setUserControllerEventHandler(UserController, "eventHandler")
		myTable = new Table("myTable");
		myTable.setEventHandler(UserController, "eventHandler")
		myTable.show()
	}
}

// JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}

function init(){
	if(jsScriptTotalCount==jsLoadedScripts){
		Main.start()
	}else{
		setTimeout(function(){ init() }, 100);
	}
}
setTimeout(function(){ init() }, 100);