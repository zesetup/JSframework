UserController  = {
	eventHandler:function(event){
		switch(event.source){
		case "table":
			switch(event.command){
			case "getDataSet":
					return DataSource.get(event.callerName)
				break;
			}
			break;
		}
	}
}

DataSource = {
	get:function(recipient){
		switch(recipient){
		case "myTable":
			var data={
					headers:["Name", "Surname", "Position"],
					rows:[["Federico", "Gonsales", "Engineer"],
					      ["Robert", "Smith", "Analitic"],
					      ["Sarah", "Onill", "Assistant"],
					      ]
			}
			return data
			break
		}
	}
}
		

//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}