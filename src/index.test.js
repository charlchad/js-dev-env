import jsdom from 'jsdom';
import fs from 'fs';
import {expect} from 'chai';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // eslint-disable-next-line prefer-arrow-callback
    jsdom.env(index, function(err, window) { // eslint-disable-line func-names
      const h1 = window.document.getElementsByTagName('h1')[0];

      done();
      expect(h1.innerHTML).to.equal('Hello, world!');
      window.close();
    });
  });
});
