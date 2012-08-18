[yafg]- yet another fluid grid
==================================================

Description
--------------------------------------

Yet another fluid grid is despite the name a little more then just a html css grid.
Actually its a little framework for my web development work. It is build to use the mobile first approach. Included are the normalize.css by Nicolas Gallagher and some other css resets and defaults by me which are found in the global.css. I'm using html5 and css3 for this framework. To support at least IE8 the html5shiv.js by Remy Sharp and respond.js by Scott Jehl are included.


Other projects that are used in yafg or inspired me
--------------------------------------

html, css, js:
[html5 Boilerplate](http://html5boilerplate.com/) (Incredible Framework)
[html5shiv.js](http://code.google.com/p/html5shiv/) (IE6-8 support for html5 elements)
[respond.js](http://github.com/scottjehl/Respond/) (IE6-8 support media queries)

Tools:
[Ant](http://ant.apache.org/) (Build tool)


Usage
----------------------------

The grid is fluid and has a breakpoint at 769 pixel. Is the browser width less than this resolution every colum has a width of 100%. Images have a max-width of 100%. 
The css files are commented and should be self explanatory.

important css calsses for the grid are 
.row		for a row containing some colums
.span(xx)	colum with the width xx (any number from 1-12)
.offset(xx)	left margin of the box element it is applied to 
.last 		used on the last colum in a row


	