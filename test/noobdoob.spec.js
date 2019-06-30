const expect = require('chai').expect;
const noobdoob = require('../noobdoob');

describe('noobdoob', function(){
    it('should convert "node" to "noobdoob"', function() {
        expect(noobdoob('node'))
            .to.equal('noobdoob');
    });

    it('should convert an entire sentence', function() {
        expect(noobdoob('it should convert an entire sentence'))
            .to.equal('oobt shooboobld coobnvoobrt oobn oobntoobroob soobntoobncoob');
    });

    it('should correctly handle lowercase and uppercase vowels', function() {
        expect(noobdoob('I came, I saw, I conquered'))
            .to.equal('Oob coobmoob, Oob soobw, Oob coobnqooboobroobd')
    });
});