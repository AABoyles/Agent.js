var stepTime = 1;
var col = undefined;

function stepGame() {
  col.each(function(e) {
    e.computeNextState();
  });
  col.each(function(e) {
    e.transition();
  });
  setTimeout("stepGame()", stepTime);
}

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

  setTimeout("stepGame()", stepTime);
});
