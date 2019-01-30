var paragraphData = d3.select("body") //first four <p> tags
    .selectAll("p")
    .data([64, 50, 23, 16, 23, 42])
    .style("font-size", function (d) {
        console.log(this);
        return d + "px";
    })

//generate two new <p> tags, setting their text to be banana
paragraphData.enter().append("p")
    .text(function (d) {
        console.log(this)
        return "banana";
    })
    .style("font-size", function (d,i) {
        console.log(paragraphData.enter().data());
        return d + "px";
    })
    

