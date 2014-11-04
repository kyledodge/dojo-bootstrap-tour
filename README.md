Dojo Bootstrap Tour
===================
Dojo Bootstrap Tour is a fork of [Bootstrap Tour by sorich87](https://github.com/sorich87/bootstrap-tour).
It replaces the jQuery dependency with Dojo and is an AMD-compatible Dojo module. It
has been tested with [Dojo Bootstrap by xsokev](https://github.com/xsokev/Dojo-Bootstrap) to remove the Bootstrap jQuery dependency.


Getting Started
---------------
At its most basic level, the tour can be started by requiring the Tour module giving it some options:
```
define([ 'dojo-bootstrap-tour/Tour', 'dojo/domReady!' ], function (Tour) {

    tour = new Tour({
		name: "demo-tour",
		backdrop: true,
		autoscroll: true,
		keyboard: true,
		steps: [
			{
				element: "#step1",
				title: "Step 1",
				content: "Here is the first step",
				placement: "right"
			},
			{
				element: "#step2",
				title: "Step 2",
				content: "Here is the second step",
				placement: "left"
			}
	    ]
	});

	app.tour.init();
	app.tour.start();

});
```

API Options
------------
Available options are well documented on the [Bootstrap Tour](http://bootstraptour.com/api/) site. I will gladly accept
pull requests for additional options or features.


License
-------
Dojo Bootstrap Tour is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
