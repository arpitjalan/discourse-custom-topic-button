export default {
  actions: {
    clickButton() {
      const url = this.siteSettings.custom_topic_button_url.replace('<TOPIC_ID>', this.get('topic.id')).replace('<USER_ID>', this.currentUser.id).replace('<USERNAME>', this.currentUser.username).replace('<TOPIC_TITLE>', this.get('topic.title')).replace('<TOPIC_SLUG>', this.get('topic.slug'));
      window.open(url, '_blank');
    }
  }
};