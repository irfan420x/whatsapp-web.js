'use strict';

const express = require('express');
const Constants = require('./src/util/Constants');

const app = express();
const port = 3000; // আপনি চাইলে এটি পরিবর্তন করতে পারেন

// API বা সার্ভারের জন্য রাউট যুক্ত করুন
app.get('/', (req, res) => {
  res.send('Hello World');
});

// মূল মডিউল রপ্তানি
module.exports = {
    Client: require('./src/Client'),
    
    version: require('./package.json').version,

    // Structures
    Chat: require('./src/structures/Chat'),
    PrivateChat: require('./src/structures/PrivateChat'),
    GroupChat: require('./src/structures/GroupChat'),
    Message: require('./src/structures/Message'),
    MessageMedia: require('./src/structures/MessageMedia'),
    Contact: require('./src/structures/Contact'),
    PrivateContact: require('./src/structures/PrivateContact'),
    BusinessContact: require('./src/structures/BusinessContact'),
    ClientInfo: require('./src/structures/ClientInfo'),
    Location: require('./src/structures/Location'),
    Poll: require('./src/structures/Poll'),
    ProductMetadata: require('./src/structures/ProductMetadata'),
    List: require('./src/structures/List'),
    Buttons: require('./src/structures/Buttons'),
    Broadcast: require('./src/structures/Broadcast'),
    
    // Auth Strategies
    NoAuth: require('./src/authStrategies/NoAuth'),
    LocalAuth: require('./src/authStrategies/LocalAuth'),
    RemoteAuth: require('./src/authStrategies/RemoteAuth'),
    
    ...Constants
};

// সার্ভার চালানো
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
