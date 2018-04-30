import Route from '@ember/routing/route';
import {inject} from '@ember/service';

export default Route.extend({
  router: inject(),
  afterModel() {
    this.get('router').transitionTo('target-route');
  }
});
