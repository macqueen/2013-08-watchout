//append fixed number of enemies to svg container
//each enemy is a circle elements with randomly calculated location attr
var w = 500;
var h = 500;
var circleData = [];

for (var i = 0; i < 16; i++){
  circleData.push({cx: (i * 30 + 25), cy: (Math.floor(Math.random() * i * 30))});
}

var boardSvg = d3.select('body').append('svg')
  .attr('width', w)
  .attr('height', h);

var circles = boardSvg.selectAll('circle')
  .data(circleData)
  .enter()
  .append('circle');

circles.attr('cx', function(d){
  return d.cx;
  })
  .attr('r', 10)
  .attr('cy', function(d){
    return d.cy;
  });