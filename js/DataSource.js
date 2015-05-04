DataSource = {
	get:function(objectName, filter){
		switch(objectName){
		case "department":							
			switch(filter){
			case "IT":						
				return [data[0]]
				break;
			case "Sales":						
				return [data[1]]
				break;
			default:
				return data
				break;
			}
			break
		}
	}
}


var data = [
		    {name:"IT", 
			employees:[
			           {name:"Federico", surname:"Gonsales", position:"Engineer"},
			           {name:"Mike", surname:"Saldan", position:"Tester"},
			           {name:"Leo", surname:"Sigh", position:"Architect"}
			           ] 
		    },
		    {name:"Sales", 
				employees:[
				           {name:"Sarah", surname:"Connor", position:"Manager"},
				           {name:"Richard", surname:"Senom", position:"Specialist"}						         
				           ] 
			    }
	   ]



//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}