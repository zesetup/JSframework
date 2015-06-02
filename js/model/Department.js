function Department(nameParam){
	var name = nameParam 
	var employees = [] 
	this.setName = function(n){
		name=n
	}
	this.addEmployee = function(e){
		employees[employees.length] = e
	}
	this.getName = function(){
		return name
	}	
	this.getEmployees = function(){		
		return employees
	}
	
}



//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}