Agent.js
========

[Agent.js](http://aaboyles.github.io/Agent.js/) is a Backbone-powered framework for constructing Agent-Based Models using pure Javascript.

Copyright 2013, Tony Boyles

What is it?
-----------
Agent-based modelling is an analytic approach to discovering emergent behaviors in large groups by specifying simple rules to which individuals adhere. Agent.js is intended to be a way to accomplish that in Javascript, automatically handling the things that are present in every model (like time, agents, controls and visualizations), and letting the coder/analyst concentrate on the model, not the code.

Why do this?
------------
I learned Agent-Based Modelling using NetLogo. It was a great first-brush with the idea, but it has some pretty big deficiencies:

* It's based on the Logo Language, which is ancient and silly and no one actually uses. I figured everyone and their dog learns some Javascript at some point, so it's a good alternative.
* It compiles to Java Byte-code, which is itself a strength of the language. However, that results in the primary packaging/presentation of models being Java applets. Really? It's 2013 and Java has no place in the browser. I wanted to put the same kind of visualizations on a Canvas, and just use normal HTML form elements to control the model.
* No one takes it seriously. Ever tried to find a job writing Netlogo code? It's pretty slim pickin's. My hope is that a newer approach which is more in-line with current software development practices will help spur along interest in the skill (Note to self: an ABM showing this would be a great demo).

Current Capabilities
--------------------
None. This is still just a fledgling idea, probably years pre-alpha.

Future Capabilities
-------------------
* Three-line model development. I claim that the simplest model should need no more than three lines to implement, and the library should handle the rest.
* I'd like to integrate an Open-Source 3D JavaScript rendering engine to enable 3D modeling, but that's just a pipe-dream for now.

Help Me!
--------
This project is a big idea. I'm but a single, modest web developer. If you dig the idea, jump in and help me out. I'll look at whatever merge requests you send.

License
-------

    Agent.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Agent.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Agent.js.  If not, see <http://www.gnu.org/licenses/>.
