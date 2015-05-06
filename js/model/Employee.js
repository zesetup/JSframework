/*
 * Объект-конструктор работник, содержит сведения о работнике
 */

function Employee(nameParam, surnameParam, positionParam, hirenDateParam, departmentParam){
	var name = nameParam 
	var surname = surnameParam  
	var position = positionParam
	var department = departmentParam
	var hirenDate = hirenDateParam 
	this.setName = function(n){
		name=name
	}
	this.setSurname = function(s){
		surname=s
	}
	this.setPosition = function(p){
		position=p
	}
	this.setHirenDate = function(d){
		hirenDate=d
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
	this.getHirenDate = function(){
		return hirenDate
	}
	this.getDepartment = function(){
		return department
	}
	this.getFullName = function(){
		return name+" "+surname
	}
	this.getExperience = function(){
		var oneDay = 24*60*60*1000;
		var now = new Date();
		//console.log(hirenDate.getTime() +"-"+ now.getTime())
		var diffDays = Math.round(Math.abs((hirenDate.getTime() - now.getTime())/(oneDay)))
		return (diffDays/365).toFixed(0)
	}
}


//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}