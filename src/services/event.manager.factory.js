export const EventManagerFactory = {
  /** Key value pair with the created EventManager instances, whose key is the event name */
  EventManagerList: {},

  /**
   * @param {string} name 
   * @returns {EventManager}
   */
  getEventManager(name) {
    if(!this.EventManagerList[name]) this.EventManagerList[name] = new EventManager(name);

    return this.EventManagerList[name];
  }
}

class EventManager {

  name;

  cbDict = {};

  constructor(name) {
    this.name = name;
  }

  subscribe(receiverName, cb) {
    if(this.cbDict[receiverName]) {
      this.unsuscribe(receiverName);
    }
    this.cbDict[receiverName] = cb;
  }

  unsuscribe(receiverName) {
    delete this.cbDict[receiverName];
  }

  emit(data) {
    Object.values(this.cbDict).forEach(cb => {
      setTimeout(() => {
        if(cb) cb(data);
        else console.error("cb is not present");
      });

    });
  }
}