var twilio = require('twilio');

module.exports = {
    getClient: function()
    {
        var accountSid = process.env.twilioAccountSid; // Your Account SID from www.twilio.com/console
        var authToken = process.env.twilioAuthToken;   // Your Auth Token from www.twilio.com/console
        
        var client = new twilio(accountSid, authToken);
        return client;
    },

    sendMessage: function(message, toNumber)
    {
        var client = module.exports.getClient()
        client.messages.create({
            body: message,
            to: toNumber,  // Text this number
            from: process.env.twilioFromPhoneNumber // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    }
}