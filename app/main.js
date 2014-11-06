
define([ '../dojo/on', '../dojo/dom', '../bootstrap-tour/Tour', 'dojo/domReady!' ], function (on, dom, Tour) {
	var app = {};

	app.tour = new Tour({
		name: "demo-tour",
		autoscroll: true,
		keyboard: true,
		debug: false,
		steps: [
			{
				element: "#tourStartBtn",
				title: "The Tour Begins!",
				content: "Woohoo! Now you can easily give your users a tour of your site. You can use the Next button below to move to the next step, or for easier navigation you can also use the arrow keys to move between steps!",
				placement: "right"
			},
			{
				element: "#step2",
				title: "Why another Tour library?",
				content: "I couldn't find one that used Dojo in place of jQuery, so I ported one",
				placement: "right"
			},
			{
				element: "#step3",
				title: "Something Doesn't work right!",
				content: "Oops! I'm working on making it better, contribute if you can!",
				placement: "left"
			},
			{
				element: "#step4",
				title: "Credits",
				content: "It wouldn't be possible without these!",
				placement: "left"
			}
		]});

		on(dom.byId("tourStartBtn"), "click", function(){
			app.tour.init();
			app.tour.start();
		});

	return app;
});
