IBone
=======

IBone is a framework that is being developed on top of very popular and widely adopted Backbone JS, obligating flexibility, scalability and high-performance as core principles. With IBone common boiler-plate code is not needed any more, and developer can concentrate more on building user friendly uber-cool interactions rather than worrying about managing views, models and controllers.


IBone solves common patterns of Backbone usage and provide
	1. Router that load and execute code on demand
	2. Autowired listeners for watching model changes
	3. Centralized view intialization which have optimization measures built in
	4. Widgets like Form, DataTable and Chart which covers all common requirements of analytical applications
	5. 

IBone implement an multi-level architecture to de-centrailize complexity of the application.
	root
	  --apps
	   --base
	    --widgets
	     --form
	     --dropdown
	     --datatable
	     --chart
	     ...
	   --app1
	    --pages
	     --page1
	     --page2
	     ...
	    --widgets
	     --widget1
	     --widget2
	   --app2
	    --pages
	     --page1
	     --page2
	    --widgets
	     ...

Initial load comprise common dependencies for IBone framework like JQuery, Underscore and Backbone libraries, all other code will get loaded on demand. 

Root assumes the responsibility of listening for url changes and load respective "app" and "page". 

Including "Base" every app will normally have one compiled JavaScript file, which will have all the code needed to run that page optimized and concatinated into single file. Developer can you choose either to include or exclude any given model from roll-up process, any thing that is excluded from optimization process will get loaded on demand.

Widgets/Pages can be added under app level. 
