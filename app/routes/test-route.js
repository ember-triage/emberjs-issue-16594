import Route from '@ember/routing/route';
import {inject} from '@ember/service';

export default Route.extend({
  foo: inject(),
  afterModel() {
    this.get('foo').bar();
  }
});
