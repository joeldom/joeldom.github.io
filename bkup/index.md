---
layout: page
title: Hello World!
tagline: Supporting tagline
---

{% include JB/setup %}

![This is me](http://www.joeldombek.com/images/github/jd-github-io3.jpg "This is me")

## Testing 1 2 3

This is my Development area for [Markdown](http://daringfireball.net/projects/markdown/) and [Jekyll](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) platforms and languages as well as adding content, testing out best practices, building up workflows, and overall just getting a better understanding of how this platform is best used.

This "site" uses the Blueberry [Muffin](http://www.richbray.me/muffin/) template. It is a design focused front-end web template using [SASS](http://sass-lang.com/) and [Jekyll](http://jekyllrb.com/).

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Recent Posts

---

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
---
