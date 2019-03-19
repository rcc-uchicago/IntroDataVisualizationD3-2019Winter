// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 22];
// Smaller elements
//var dataset = [1,2,3,4,1];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

var yScale = d3.scaleLinear()
   .domain([0, d3.max(dataset)])
   .range([0, svgHeight]);

var barChart = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y", function(x) {
//        return svgHeight - d
// need to adjust the height of each bar using the scaled values
      return svgHeight - yScale(x)

   })
   .attr("height", function(x) {
//       return d;
       return yScale(x);

   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (x, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   });
