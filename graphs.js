function Graphs() {
    this.Graphs = {};
    this.nodes = [];
    this.start = null;
    this.end = null;
    this.springLength = 64;
}

Graphs.prototype.setStart = function (node) {
    this.start = node;
}

Graphs.prototype.setEnd = function (node) {
    this.end = node;
}

Graphs.prototype.addNode = function (label) {
    var n = new Nodes(label);
    this.Graphs[label] = n;
    this.nodes.push(n);
    return n;
}