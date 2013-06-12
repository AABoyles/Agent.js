var col = undefined;
var stepTime = 0;
var numSteps = 0;

var Agent = Backbone.Model.extend({
	computeNextState : function() {
	},
});
var Population = Backbone.Collection;
var ABM = function(domElement, collections) {
	run = function() {
	};
	geometry = {
		bounded : {},
		verticalWrap : {},
		horizontalWrap : {},
		taurus : {},
		sphere : {}
	};
	var $el = domElement || $("body");
	var colls = collections || [];
};

function step() {
	col.each(function(e) {
		e.next();
	});
	col.each(function(e) {
		e.set('alive', e.get('nextAlive'));
	});
	numSteps++;
	$("#num-steps").text(numSteps);
}

var timer = setInterval(step, stepTime);

