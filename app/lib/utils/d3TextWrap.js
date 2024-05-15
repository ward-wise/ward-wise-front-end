import { select } from "d3";


/* wrap:
this is a modified version of Mike Bostock's method for wrapping
D3 text labels.
Original code available at https://gist.github.com/mbostock/7555321
 **/
export default function wrap(text, width) {
  text.each(function () {
    var text = select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      const computedLength = tspan.node().getComputedTextLength()
      if (computedLength > width)
      {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", -computedLength/12).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}
