var stepTime = 1;
var col = undefined;

function step() {
	col.each(function(e) {
		e.computeNextState();
	});
	col.each(function(e) {
		e.transition();
	});
	setTimeout("step()", stepTime);
}

var Agent = Backbone.Model;

var Population = Backbone.Collection;

var ABM = function(domElement, collections) {
	run = function() {};
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

//myAgent = new Agent('div', {attributes}, {options});
//myAgents = new Population(myAgent, {options});
//myModel = new ABM($('someDOMElement'), [myAgents]);
//myModel.run();

$(function() {
	var models = new Array();
	var trs = $(document.createElement('tbody'));
	for (var x = 0; x < 100; x++) {
		var tr = $(document.createElement('tr'));
		for (var y = 0; y < 100; y++) {
			var alive = (Math.floor(Math.random() * 100) % 2) == 1;
			var cell = new Cell({
				'x' : x,
				'y' : y,
				'alive' : alive
			});
			models.push(cell);
			var cv = new CellView({
				model : cell
			});
			cv.render();
			tr.append(cv.el);
		}
		trs.append(tr)
	}
	$('#world').html(trs)
	col = new CellCollection(models);

	setTimeout("step()", stepTime);
});
