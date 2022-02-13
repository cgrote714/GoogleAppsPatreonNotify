# GoogleAppsPatreonNotify
A Google Apps Script to forward Patreon notifications from Gmail to a Discord channel.
Needed as the Patreon Bot doesn't post notifications of any kind, it only updates member roles and ONLY if the member has linked their Patreon account to their Discord account, which is rare.

Requirements:
You must have a Google account and your Gmail address must be the creator email address of the Patreon account.

Steps:
1. On your Discord, under Server Settings, Integrations, create New Webhook.
2. Give the Webhook a name, this will be the name the posts are made by.
3. Select the channel the webhook should post messages into, usually a moderator channel.
4. Copy the Webhook URL and use it in line 19 of Code.gs
5. Log in to Google/Gmail
6. Open the Apps Script page (https://script.google.com/home) and create a new project
7. Use the code from Code.gs substituting your Webhook URL
8. Save and test the project.  You will be asked by Gmail to authorize the project.
9. Deploy the project as a web app but don't make it public (Only Me)
10. Create a Trigger that runs it every half hour

You can test it by marking an old email notification as Unread.

