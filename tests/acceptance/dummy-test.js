import {module, test} from 'qunit';
import {
  visit, currentRouteName
} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | Dummy', function(hooks) {
  setupApplicationTest(hooks);

  test('Dummy', async function(assert) {
    await visit('/test-route?testParam=1');
    assert.strictEqual(currentRouteName(), 'target-route');
  });
});