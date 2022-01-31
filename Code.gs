function myFunction() {
  const threads = GmailApp.search('from:Patreon');
  for (const thread of threads) {
    const messages = thread.getMessages()
    for (const message of messages) {
      if (message.isUnread()) {
        if (new RegExp("^New.*patron!.*$").test(message.getSubject())) {
            postMessageToDiscord(message.getSubject());
            message.markRead();
        }
        //additional checks for other messages such as cancellations
        
      }
    }
  }
}

function postMessageToDiscord(message) {
  var discordUrl = '[YOUR DISCORD INTEGRATION WEBHOOK URL HERE]';

  var payload = JSON.stringify({
    "embeds": [{
      "color": 0x0099ff,
      "title": "Member Alert",
      "url": "https://www.patreon.com/members",
      "author": {
        "name": "Patreon",
        "icon_url": "https://c5.patreon.com/external/favicon/apple-touch-icon.png",
        "url": "https://www.patreon.com/"
      },
      "description": message
    }]
    });
    
  var params = {
    method: 'POST',
    payload: payload,
    muteHttpExceptions: true,
	  contentType: "application/json"
  };
  
  var response = UrlFetchApp.fetch(discordUrl, params);
}
