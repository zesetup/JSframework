/**
 * @author      zesetup <zerosetup@gmail.com>
 * @version     1.0
 * @since       1.0
 */

/*
 * Объект-конструктор отдел, содержит сведения о отделе
 * @param nameParam  название отдела
 */
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
