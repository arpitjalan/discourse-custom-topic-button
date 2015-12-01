import { on } from 'ember-addons/ember-computed-decorators';

export default {
  name: 'custom-topic-button',
  initialize(container) {
    const ButtonView = container.lookupFactory('view:button');
    const MainButtons = container.lookupFactory('view:topic-footer-main-buttons');
    const siteSettings = container.lookup('site-settings:main');

    const CustomTopic = ButtonView.extend({
      classNames: ['custom-topic-button'],
      text: siteSettings.custom_topic_button_label,
      title: siteSettings.custom_topic_button_title,

      click() {
        window.open(siteSettings.custom_topic_button_url, '_blank');
      }
    });

    MainButtons.reopen({
      @on('additionalButtons')
      addCustomTopicButton() {
        this.attachViewClass(CustomTopic);
      }
    });
  }
}
