var client;

function DiscordRPC(title) {
    if (process.argv.includes("--disable-rpc")) return;

    if (!client) {
        client = require('discord-rich-presence')('963128360219869194');
    }

    let d;

    if (title.includes('on Xbox Cloud Gaming')) {
        d = title;
    } else {
        d = "Home on Xbox Cloud Gaming";
    };

    client.updatePresence({
        details: d,
        state: `Not affiliated with Microsoft`,
        startTimestamp: Date.now(),
        largeImageKey: 'icon',
        instance: true,
    });
};

module.exports = { DiscordRPC };
