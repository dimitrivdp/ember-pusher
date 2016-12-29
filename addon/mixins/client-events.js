import Ember from 'ember';

export default Ember.Mixin.create({
  // Fire an event programmatically. All Events must unfortunately use
  // the client-<eventname> format for client events (a pusher restriction).
  pusherTrigger(channelName, eventName, data, pusherInstance) {
    let channel = pusherInstance ? pusherInstance.channelFor(channelName) : this.pusher.channelFor(channelName);
    channel.trigger(eventName, data);
  }
});
