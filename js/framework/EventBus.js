/*
 * Объект-экземпляр, шина событий, позволяет подписываться на события и публиковать события.
 */
EventBus = {
	subscribers:[],
	/*
	 * регистрирует подписчика события
	 * @param subscriberObject объект-экземпляр подписчика события
	 * @param subscriberMethod метод  подписчика события для обработки сообщения
	 */ 
	subscribe:function(subscriberObject, subscriberMethod, Event) {
		var subscriber = {}
		subscriber.object = subscriberObject
		subscriber.method = subscriberMethod
		subscriber.event = Event 
		this.subscribers[this.subscribers.length]=subscriber
	},
	/*
	 * публикация события
	 * @param E строка-идетификатор события
	 * @param params параметры
	 * @return возвращает результат отработки по событию 
	 */
	publish:function(E, params){
		//alert(params.expirience)
		for(var i=0; i<this.subscribers.length;  i++){			
			var Event = this.subscribers[i].event
			if(Event===E){				
				return this.subscribers[i].object[this.subscribers[i].method](params)
			}			
		}
	}
}

//JS scripts counter 
if(jsLoadedScripts){
	jsLoadedScripts ++
}else{
	var jsLoadedScripts = 1
}