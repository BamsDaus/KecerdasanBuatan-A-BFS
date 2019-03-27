function Nodes(label) {
    this.label = label;
    this.edges = [];
    this.parent = null;
    this.searched = false;
}

Nodes.prototype.connect = function () {
    for (var i = 0; i < arguments.length; i++) {
        this.edges.push(arguments[i]);
    }
}

Nodes.prototype.isConnected = function (neighbor) {
    var index = this.edges.indexOf(neighbor);
    if (index >= 0) {
        return true;
    } else {
        return false;
    }
}