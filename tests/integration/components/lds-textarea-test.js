import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-textarea', 'Integration | Component | lds textarea', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{lds-textarea}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#lds-textarea}}
  //     template block text
  //   {{/lds-textarea}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
