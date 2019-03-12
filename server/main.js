import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'communecter' },
    {
      $set: {
        loginStyle: 'popup',
        clientId: 'Jjwjg6gouWLXhMGKW',
        secret: 'wylRI8YtJlQepJsECDqjye4nXiQx0xBnx4brpQ-UPQx',
        idTokenWhitelistFields: []
      }
    }
  );
});
