function Employee(nameParam, surnameParam, positionParam, departmentParam){
	var name = nameParam 
	var surname = surnameParam  
	var position = positionParam
	var department = departmentParam 
	this.setName = function(n){
		name=name
	}
	this.setSurname = function(s){
		surname=s
	}
	this.setPosition = function(p){
		position=p
	}
	this.setDepartment = function(d){
		department=d
	}
	this.getName = function(){
		return name
	}
	this.getSurname = function(){
		return surname
	}
	this.getPosition = function(){
		return position
	}
	this.getDepartment = function(){
		return department
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}