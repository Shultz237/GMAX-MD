function hi() {
  console.log("Hello World!");
}
hi();
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "dog",
  'desc': "Fetch a random dog image.",
  'category': 'fun',
  'react': '🐶',
  'filename': __filename
}, async (_0x362fd4, _0xc7457, _0x56364d, {
  from: _0x5cc14c,
  quoted: _0x253698,
  body: _0x1fa47d,
  isCmd: _0x533faa,
  command: _0x2d79df,
  args: _0x423c90,
  q: _0x5453f7,
  isGroup: _0x243155,
  sender: _0x4b35cf,
  senderNumber: _0x37a44c,
  botNumber2: _0x397da8,
  botNumber: _0xa5ea12,
  pushname: _0x17ea97,
  isMe: _0x5836bb,
  isOwner: _0x327855,
  groupMetadata: _0xbd80b2,
  groupName: _0x28cfac,
  participants: _0x51ff5a,
  groupAdmins: _0x1f2372,
  isBotAdmins: _0x528897,
  isAdmins: _0x323d8e,
  reply: _0x1f36a8
}) => {
  try {
    const _0x524a4e = await axios.get("https://dog.ceo/api/breeds/image/random");
    const _0x2fcba2 = _0x524a4e.data;
    await _0x362fd4.sendMessage(_0x5cc14c, {
      'image': {
        'url': _0x2fcba2.message
      },
      'caption': "> © Generated By ɢᴍᴀx "
    }, {
      'quoted': _0xc7457
    });
  } catch (_0x9789de) {
    console.log(_0x9789de);
    _0x1f36a8("єяяσя ƒєт¢нιηg ∂σg ιмαgє: " + _0x9789de.message);
  }
});