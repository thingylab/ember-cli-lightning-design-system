import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-button', 'Integration | Component | slds button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-button}}`);

  assert.equal(this.$().text().trim(), 'Submit');
  assert.ok(this.$('button.slds-button').length);
  assert.notOk(this.$('button').is('[disabled=disabled]'));
  assert.equal(this.$('svg').length, 0);
});

test('it renders with type brand', function(assert) {
  this.render(hbs`{{slds-button type='brand'}}`);

  assert.ok(this.$('button.slds-button.slds-button--brand').length);
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-button type='brand' disabled=true}}`);

  assert.equal(this.$('button:disabled').length, 1);
});

test('it is clickable', function(assert) {
  assert.expect(1);

  this.set('externalAction', message => {
    assert.equal(message, 'pressed');
  });

  this.render(hbs`{{slds-button type='brand' clicked=(action externalAction 'pressed')}}`);
  this.$('button').click();
});

test('it renders with icon', function(assert) {
  this.render(hbs`{{slds-button type='brand' icon='user'}}`);
  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--left');
  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#user');
});

test('it renders with icon (right)', function(assert) {
  this.render(hbs`{{slds-button type='brand' icon='down' iconPosition='right'}}`);
  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--right');
  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#down');
});
