discourse-topic-group-button
=======================

Adds a custom button at the bottom of a topic.

Configuration
=====

From Admin > Site Settings > Plugin, modify `custom_topic_button_url`, `custom_topic_button_title`, `custom_topic_button_label`.

Installation
============

* Add the plugin's repo url to your container's `app.yml` file

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/techAPJ/discourse-custom-topic-button.git
```

* Rebuild the container

```
cd /var/docker
git pull
./launcher rebuild app
```

License
=======
MIT
