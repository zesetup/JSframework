var jsScriptTotalCount=7
var myTable = new Table("myTable");

Main = {
	init:function(){
		Controller.setUserControllerEventHandler(UserController, "eventHandler")	
		myTable.setEventHandler(UserController, "eventHandler")
		myTable.setTargetDomId("employeeTable")
		myTable.setFilter("department")
	},		
	showEmployees:function(param){
		myTable.remove()
		switch(param){
		case "IT":
			myTable.setFilter("department","IT")
			myTable.show()			
			break
		case "Sales":
			myTable.setFilter("department","Sales")
			myTable.show()			
			break
		default:
			myTable.setFilter("department", null)
			myTable.show()
			break
		}		
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
		Main.init()
	}else{
		setTimeout(function(){ init() }, 100);
	}
}
setTimeout(function(){ init() }, 100);