import { expect } from 'chai';
import Capitalize from '../../src/index';

describe('Capitalize', function() {
  it('should Test', function() {
    const Test = Capitalize('test');
    expect(Test).to.equal('Test')
  });
  it('should Stop This Shit', function() {
    const Test = Capitalize('stop this shit');
    expect(Test).to.equal('Stop This Shit')
  });
});
