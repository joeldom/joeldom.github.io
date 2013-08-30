---
layout: page
title: Joel Dombek : Dev Area
tagline: jekyll staging area
---
{% include JB/setup %}

This is my Development area for [Markdown](http://daringfireball.net/projects/markdown/) and [Jekyll](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) platforms and languages as well as adding content, testing out best practices, building up workflows, and overall just getting a better understanding of how this platform is best used.

This "site" uses the Blueberry [Muffin](http://www.richbray.me/muffin/) template. It is a design focused front-end web template using [SASS](http://sass-lang.com/) and [Jekyll](http://jekyllrb.com/).

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.


