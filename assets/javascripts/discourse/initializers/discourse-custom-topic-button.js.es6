import computed from 'ember-addons/ember-computed-decorators';

export default {
  name: 'custom-topic-button',
  initialize(container) {
    const user = container.lookup('current-user:main');
    const siteSettings = container.lookup('site-settings:main');
    const TopicFooterButtonsComponent = container.lookupFactory('component:topic-footer-buttons');
  }
}
  