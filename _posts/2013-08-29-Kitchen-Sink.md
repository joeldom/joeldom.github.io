---
layout: post
category : lessons
tagline: "comprehensive index elements"
tags : [markdown, jekyll, tutorial, css, sass, design]
---
{% include JB/setup %}
![Markdown](http://d2o0t5hpnwv4c1.cloudfront.net/2063_markdown/preview.png "Markdown logo")
This Jekyll//Markdown//SASS style sheet with provide a list of styled elements based on the _Twitter_Bootstrap_Theme_ and how they can be applied through [Markdown](#) and the [Muo.app](#).

###Headings
---
Begin a paragraph with a #, and that paragraph becomes a header. The number of # signifies the heading level number.
# Heading One
This is a paragraph. Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam.
 
## Heading Two
 
This is a paragraph. Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam.
 
### Heading Three
#### Heading Four
##### Heading Five
###### Heading Six

	### Heading Three
	#### Heading Four
	##### Heading Five
	###### Heading Six
Becomes:
	
	<h3>Heading Three</h3>
	<h4>Heading Four</h4>
	<h5>Heading Five</h5>
	<h6>Heading Six</h6>

###Paragraphs
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.
 
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.

### Blockquotes
---
This is a normal paragraph.
 
> This is a blockquote paragraph.
 
> And the blockquote continues here, too.

	This is a normal paragraph.
	> This is a blockquote paragraph.
	> And the blockquote continues here, too.
…Which converts to:

	<p>This is a normal paragraph.</p>
	<blockquote>
		<p>This is a blockquote paragraph.</p>
    	<p>And the blockquote continues here, too.</p>
    </blockquote>

### Footnotes
---
Footnotes work mostly like reference-style links. A footnote is made of two things: a marker in the text that will become a superscript number; a footnote definition that will be placed in a list of footnotes at the end of the document. A footnote looks like this:

That's some text with a footnote.[^1]

[^1]: And that's the footnote.

###Code
---
You can deliminate small inline code snippets, using the character around code. i.e. `inline code` Larger blocks of code can be defined by simply indenting the code up a level (at least one tab/four spaces) – the indentation level will be removed. Markdown automatically escapes all special characters inside a block of code, meaning that you can safely just copy in blocks of code without manually escaping < to &lt; and > to &gt; etc.

This is a paragraph with a bit of `<strong>CODE</strong>` in it.
 
    <?php
    $name = $_GET['name'] ?: 'World';
    echo "Hello $name & everyone else!";
    ?>
 
Another paragraph, but with a code block above it.

    .
    |-- _config.yml
    |-- _includes
    |-- _layouts
    |   |-- default.html
    |   |-- post.html
    |-- _posts
    |   |-- 2011-10-25-open-source-is-good.markdown
    |   |-- 2011-04-26-hello-world.markdown
    |-- _site
    |-- index.html
    |-- assets
        |-- css
            |-- style.css
        |-- javascripts
*example of jekyll file structure*

#### Fenced Code Blocks

Start with a line containing 3 or more backticks, and ends with the first line with the same number of backticks:

```
Fenced code blocks are like Standard Markdown’s regular code
blocks, except that they’re not indented and instead rely on
a start and end fence lines to delimit the code block.
```

###Lists
---
Another true example of how Markdown just comes naturally is in how you specify a list. Simply start a paragraph with a * (or +, -) to create an unordered list. Use numbers, 1., 2. etc. for ordered lists:

I will need:
 
* Bread
* Eggs
* Milk
* Butter
 
Then, I can begin to make a cake & scrambled eggs:
 
1. Mix Eggs & Milk  
2. Toast Bread 
3. Scramble with whisk
4. Butter frying pan

###Tables
---

A simple table looks like this:

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

If you wish, you can add a leading and tailing pipe to each line of the table:

| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |

Specify alignment for each column by adding colons to separator lines:

First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right

	First Header | Second Header | Third Header
	:----------- | :-----------: | -----------:
	Left         | Center        | Right
	Left         | Center        | Right


###Horizontal Rules
---
You can produce a horizontal rule tag `<hr />` by placing three or more hyphens, asterisks, or underscores on a line by themselves. If you wish, you may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

	* * *
	***
	*****
	- - -
	---------------------------------------

###Inline Text Elements
---
We already covered italicising and bolding text at the start of this article (* and **), however, you can also swap the astericks for underscores, if that's more your thing:

Here's some *italic* text, and more _italic_ text. Some **bold stuff** here; plus a __little__ bit more.

	Here's some *italic* text, and more _italic_ text. Some **bold stuff** here; plus a __little__ bit more.

Another way to display **bold** or *italic* text inside of a paragraph or inline with other elements is to use a backslash to escape the **Markdown** syntax like this:

	**\_config.yml**  
Shortcuts also work inside of "good" **Markdown** editors, so hitting cmd+b or cmd+i with **bold** & *italicize* text.

###Links
---
A link to [Google](http://google.com) equals:

	    [Google](http://google.com)
	    <a href="http://google.com">Google</a>
	    
To display an image, prefix the link code with a !:

	    ![The Twitter Logo](http://www.aaanet.org/images/twitter-logo.png)
	    <img src="http://www.aaanet.org/images/twitter-logo.png" alt="The Twitter Logo">
![The Twitter Logo](http://www.aaanet.org/images/twitter-logo.png) Twitter logo

If you’re referring to a local resource on the same server, you can use relative paths:

See my `[About](/about/)` page for details. 
Reference-style links use a second set of square brackets, inside which you place a label of your choosing to identify the link:

This is [an example][id] equals `[an example][id]` reference-style link.
You can optionally use a space to separate the sets of brackets:

This is [an example] [id] reference-style link.
Then, anywhere in the document, you define your link label like this, on a line by itself:

	[id]: http://example.com/  "Optional Title Here"
That is:

Square brackets containing the link identifier (optionally indented from the left margin using up to three spaces);
followed by a colon;
followed by one or more spaces (or tabs);
followed by the URL for the link;
optionally followed by a title attribute for the link, enclosed in double or single quotes, or enclosed in parentheses.
The following three link definitions are equivalent:

	[foo]: http://example.com/  "Optional Title Here"
	[foo]: http://example.com/  'Optional Title Here'
	[foo]: http://example.com/  (Optional Title Here)
**NOTE:** There is a known bug in Markdown.pl 1.0.1 which prevents single quotes from being used to delimit link titles.

The link URL may, optionally, be surrounded by angle brackets:

[id]: <http://example.com/>  "Optional Title Here"
You can put the title attribute on the next line and use extra spaces or tabs for padding, which tends to look better with longer URLs:

[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"
Link definitions are only used for creating links during Markdown processing, and are stripped from your document in the HTML output.

###Markdown Doesn't Get In Your Way
---
Markdown is very lenient, when it comes to breaking out of its markup and just using HTML instead. If you need to include a table, include it in HTML. Or, if you'd rather write your links in HTML-format, you can do so. Markdown is smart enough to know when you mean to include HTML, and it works around it.

Markdown also auto-escapes characters, such as &, < and > into the HTML entity form. It even intelligently converts common character combinations into what you really mean.

* Three dots will automatically become an ellipsis: …
* Two hyphens will become an en-dash: –
* Quote marks will become the "fancy", curled versions of themselves.

###Flavors & GitHub Flavored Markdown
---
A number of alternative Markdown "flavors" exist, which extend the default set of Markdown rules. A common extension is easy line-breaking, as described above. One of the most well-known Markdown flavors is [GitHub's Flavored Markdown](http://github.github.com/github-flavored-markdown/)(GFM). This is used to markup user input everywhere on their site. As well as including improved line-breaking support and a number of customizations specific to GitHub, my favorite feature is their alternative to code fencing, which also allows you to specify a syntax for highlighting. Simply surround a code block with ``` on either side, including the language at the start, like so:

	```php
	<?php $name = $_GET['name'] ?: 'World';
	echo "Hello $name & everyone else!";
	?>
	```
*this is not displaying properly yet…*


###Conversion
---
The official converter is written in Perl, and is available for download on the Markdown homepage at Daring Fireball. Several other Markdown converters also exist, for a multitude of different languages – from C…to Ruby… to JavaScript… to PHP. A full list of implementations can be found on Wikipedia.

One popular Ruby implementation is RedCarpet, based on the C library, Sundown, which provides a very simple way to customize the output of the generated HTML to produce your own "flavor" of Markdown.

Recently, I used this library to created a Markdown converter, which accepts GitHub Flavored Markdown (to allow specifying a code language for syntax highlighting), and outputs the converted HTML in the specific style required by the Tuts+ sites. The Tuts+ Markdown converter can be found here. If you’ve ever written a tutorial for this site, definitely use it!

>In fact, this article was written in Markdown, using the popular Mou Markdown editor for OSX.