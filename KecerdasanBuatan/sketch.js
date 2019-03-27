var data;
var graph;

var queue = [];
var root = [];

function preload() {
    data = loadJSON('http://localhost/KecerdasanBuatan/assets/mapdata.json');
}

function setup() {
    createCanvas(600, 600);
    console.log(data);

    maps = new Drawer;
    graph = new Graphs;

    var h5 = graph.addNode('H5');
    var kos = graph.addNode('KOS');
    var a = graph.addNode('A');
    var b = graph.addNode('B');
    var c = graph.addNode('C');
    var d = graph.addNode('D');
    var e = graph.addNode('E');
    var f = graph.addNode('F');
    var g = graph.addNode('G');
    var h = graph.addNode('H');
    var i = graph.addNode('I');
    var j = graph.addNode('J');

    h5.connect(a, b, c, d);
    a.connect(b, e);
    b.connect(c);
    c.connect(i);
    d.connect(h, g);
    e.connect(g, f);
    f.connect(kos);
    g.connect(kos);
    h.connect(i, j);
    i.connect(j);
    j.connect(kos);
    kos.connect(f, g, j);

    //Set Start and Goal
    graph.setStart(h5);
    graph.setEnd(kos);

    breadthFirstSearch();
}

function draw() {
    console.log("Hasil BFS :");
    background(190);
    maps.drawMaps();

    push();
    textAlign(CENTER);
    textSize(18);
    var yVertex = 440;
    console.log(root.reverse());
    text("HASIL A* di Console", 10, 390, 580, 100);
    text("--HASIL BFS--", 10, 410, 580, 100);
    for (var i = 0; i <= root.length; i++) {
        text(root[i].label, 10, yVertex, 580, 100);
        yVertex += 20;
    }
    pop();
}

function breadthFirstSearch() {
    queue.push(graph.start);

    while (queue.length > 0) {
        var point = queue.shift();
        if (!point.searched) {
            if (point == graph.end) {
                root.push(point);
                var next = point.parent;
                while (next) {
                    root.push(next);
                    next = next.parent;
                }
                break;
            } else {
                var next = point.edges;
                for (var i = 0; i < next.length; i++) {
                    var neighbor = next[i];
                    queue.push(neighbor);
                    neighbor.parent = point;
                }
                point.searched = true;
            }
        }
    }
}