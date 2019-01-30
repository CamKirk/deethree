var graph = d3
    .select("#graph")
    .style("background-color", "gray")
    .attr("height", 400)
    .attr("width", 400)
//nifty background set up

// touch not this code
ctx = graph.node().getContext("2d")
ctx.beginPath()
ctx.rect(200, 200, 200, 200);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
// woe betide those that jack up my boxes.

graph
    .data([1,2,13,20,23])
    .enter()
    .append()
    .attr("x", function(d){return d})
    .attr("y", 20)
    .attr("size", 30)
    .attr("fillStyle", "green")

