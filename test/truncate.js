ip = require('../index.js')
db = new ip.IPTrie()

try {
  console.log(db.truncate('1.2.3.4'))
} catch(e) {
  console.log('1 failed')
}

try {
  console.log(db.truncate('1.2.3'))
} catch(e) {
  console.log('Expected error -> '+ e)
}

try {
  console.log(db.truncate('2001:0db8:0005:0000:0005:ff00:0042:8329'))
} catch(e) {
  console.log('3 failed')
}

try {
  console.log(db.truncate('2001:0db8:0005:12345::'))
} catch(e) {
  console.log('Expected error -> '+ e)
}

try {
  console.log(db.truncate('you are appreciated'))
} catch(e) {
  console.log('Expected error -> '+ e)
}

try {
  console.log(db.truncate(7))
} catch(e) {
  console.log('Expected error -> '+ e)
}

try {
  console.log(db.truncate(null))
} catch(e) {
  console.log('Expected error -> '+ e)
}
