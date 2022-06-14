/** Design patter Factory to handle events */
export const EventManagerFactory = {
  /** Key value pair with the created EventManager instances, whose key is the event name */
  EventManagerList: {},

  /**
   * @param {string} name The event name
   * @returns {EventManager} The instance of the event manager which will be responsible of handling the given event name
   */
  getEventManager(name) {
    if(!this.EventManagerList[name]) this.EventManagerList[name] = new EventManager(name);

    return this.EventManagerList[name];
  }
}

class EventManager {

  name;

  cbDict = {};

  /**@param {string} name */
  constructor(name) {
    this.name = name;
  }

  /**
   * 
   * @param {string} receiverName To store the cb, in case we want to delete it or rewrite it
   * @param {Function} cb To be called when the event is fired
   */
  subscribe(receiverName, cb) {
    if(this.cbDict[receiverName]) {
      this.unsuscribe(receiverName);
    }
    this.cbDict[receiverName] = cb;
  }

  /**
   * Removes the stored cb with that receiverName
   * @param {string} receiverName 
   */
  unsuscribe(receiverName) {
    delete this.cbDict[receiverName];
  }

  /**
   * @fires Every saved cb that exists
   * @param {any} data 
   */
  emit(data) {
    Object.values(this.cbDict).forEach(cb => {
      setTimeout(() => {
        if(cb) cb(data);
        else console.error("cb is not present");
      });

    });
  }
}