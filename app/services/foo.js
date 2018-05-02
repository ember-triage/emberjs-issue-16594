import Service from '@ember/service';
import {inject} from '@ember/service';

export default Service.extend({
  router: inject(),
  bar() {
    this.get('router').transitionTo('target-route');
  }
});
