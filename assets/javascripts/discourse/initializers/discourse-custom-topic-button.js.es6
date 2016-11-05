export default {
  name: 'custom-topic-button',
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    const TopicFooterButtonsComponent = container.lookupFactory('component:topic-footer-buttons');

    TopicFooterButtonsComponent.reopen({
      customButtonLabel: siteSettings.custom_topic_button_label,
      customButtonTitle: siteSettings.custom_topic_button_title,
      actions: {
        clickButton() {
          window.open(siteSettings.custom_topic_button_url, '_blank');
        }
      }
    });
  }
}
