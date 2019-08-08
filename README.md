# noobdoob

This is a simple converter that takes a string and replaces all lowercase vowels with "oob" and all uppercase vowels
with "Oob". For example, the name "Alice" would be converted to "Oobloobcoob". The name of this package was created
by performing this conversion on the word "node", resulting in "noobdoob".

# Installation

```bash
npm install --save noobdoob
```

# Usage

```javascript
const noobdoob = require('noobdoob');
noobdoob('node');
// "noobdoob"
noobdoob('This package is pointless');
// "Thoobs poobckoobgoob oobs pooboobntloobss"
```