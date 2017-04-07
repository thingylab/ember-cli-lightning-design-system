import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu-heading', 'Integration | Component | lds menu heading', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-menu-heading}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#lds-menu-heading}}
      template block text
    {{/lds-menu-heading}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
