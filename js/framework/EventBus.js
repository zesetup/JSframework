/**
 * @author      zesetup <zerosetup@gmail.com>
 * @version     1.0
 * @since       1.0
 */

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
	subscribe:function(subscriberObject, subscriberMethod, event) {
		var subscriber = {}
		subscriber.object = subscriberObject
		subscriber.method = subscriberMethod
		subscriber.event = event 
		this.subscribers[this.subscribers.length]=subscriber
	},
	/*
	 * публикация события
	 * @param eventId строка-идетификатор события
	 * @param params параметры
	 * @return возвращает результат отработки по событию 
	 */
	publish:function(eventId, params){
		for(var i=0; i<this.subscribers.length;  i++){			
			var event = this.subscribers[i].event
			if(event===eventId){				
				return this.subscribers[i].object[this.subscribers[i].method](params)
			}			
		}
	}
}