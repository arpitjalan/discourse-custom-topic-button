export default {
  actions: {
    clickButton() {
      const url = this.siteSettings.custom_topic_button_url.replace('<TOPIC_ID>', this.get('topic.id')).replace('<USER_ID>', this.currentUser.id).replace('<USERNAME>', this.currentUser.username);
      window.open(url, '_blank');
    }
  }
};