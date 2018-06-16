const pokemonChooser = require('./index');
const expect = require('chai').expect;

describe('pokemon-chooser', () => {
  describe('fightAgainst', () => {
    it('should work for type', () => {
      const againstFire = pokemonChooser.fightAgainst('fire');
      expect(againstFire.superEffective).to.have.lengthOf(3);
      expect(againstFire.normal).to.have.lengthOf(9);
      expect(againstFire.notVeryEffective).to.have.lengthOf(6);
      expect(againstFire.noEffect).to.be.empty;
    });

    it('should work for single-type pokemon', () => {
      const againstLitten = pokemonChooser.fightAgainst('Litten');
      expect(againstLitten.superEffective).to.have.lengthOf(3);
      expect(againstLitten.normal).to.have.lengthOf(9);
      expect(againstLitten.notVeryEffective).to.have.lengthOf(6);
      expect(againstLitten.noEffect).to.be.empty;
    });

    it('should work for dual-type pokemon', () => {
      const againstRowlet = pokemonChooser.fightAgainst('Rowlet'); // grass & flying
      expect(againstRowlet.superEffective4).to.have.lengthOf(1);
      expect(againstRowlet.superEffective).to.have.lengthOf(4);
      expect(againstRowlet.normal).to.have.lengthOf(9);
      expect(againstRowlet.notVeryEffective).to.have.lengthOf(2);
      expect(againstRowlet.notVeryEffective4).to.have.lengthOf(1);
      expect(againstRowlet.noEffect).to.have.lengthOf(1);
    });
  });
});