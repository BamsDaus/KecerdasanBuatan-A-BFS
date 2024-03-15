var aStarAlgorithm;
(function (aStarAlgorithm) {
    var AllNodesDeclaration = (function () {
        function AllNodesDeclaration() {
        }
        AllNodesDeclaration.AllNodesDeclaration = function () {
            var aStarH5 = new aStarAlgorithm.Nodes("H5", 1200);
            var aStarKOS = new aStarAlgorithm.Nodes("KOS", 0);
            var aStarA = new aStarAlgorithm.Nodes("A", 1100);
            var aStarB = new aStarAlgorithm.Nodes("B", 1500);
            var aStarC = new aStarAlgorithm.Nodes("C", 1460);
            var aStarD = new aStarAlgorithm.Nodes("D", 766);
            var aStarE = new aStarAlgorithm.Nodes("E", 1010);
            var aStarF = new aStarAlgorithm.Nodes("F", 775);
            var aStarG = new aStarAlgorithm.Nodes("G", 670);
            var aStarH = new aStarAlgorithm.Nodes("H", 850);
            var aStarI = new aStarAlgorithm.Nodes("I", 1000);
            var aStarJ = new aStarAlgorithm.Nodes("J", 608);

            aStarH5.connect(new aStarAlgorithm.Edges(aStarA, 400));
            aStarH5.connect(new aStarAlgorithm.Edges(aStarB, 450));
            aStarH5.connect(new aStarAlgorithm.Edges(aStarC, 650));
            aStarH5.connect(new aStarAlgorithm.Edges(aStarD, 500));
            aStarA.connect(new aStarAlgorithm.Edges(aStarB, 650));
            aStarA.connect(new aStarAlgorithm.Edges(aStarE, 100));
            aStarB.connect(new aStarAlgorithm.Edges(aStarC, 1200));
            aStarC.connect(new aStarAlgorithm.Edges(aStarI, 800));
            aStarD.connect(new aStarAlgorithm.Edges(aStarH, 100));
            aStarD.connect(new aStarAlgorithm.Edges(aStarG, 600));
            aStarE.connect(new aStarAlgorithm.Edges(aStarG, 400));
            aStarE.connect(new aStarAlgorithm.Edges(aStarF, 600));
            aStarF.connect(new aStarAlgorithm.Edges(aStarKOS, 900));
            aStarG.connect(new aStarAlgorithm.Edges(aStarKOS, 750));
            aStarH.connect(new aStarAlgorithm.Edges(aStarI, 500));
            aStarH.connect(new aStarAlgorithm.Edges(aStarJ, 950));
            aStarI.connect(new aStarAlgorithm.Edges(aStarJ, 700));
            aStarJ.connect(new aStarAlgorithm.Edges(aStarKOS, 750));
            aStarKOS.connect(new aStarAlgorithm.Edges(aStarF, 900));
            aStarKOS.connect(new aStarAlgorithm.Edges(aStarG, 750));
            aStarKOS.connect(new aStarAlgorithm.Edges(aStarJ, 700));

            var aStar = new aStarAlgorithm.AStarSearch();
            aStar.Astarsearch(aStarH5, aStarKOS);
            console.log("Hasil A* : ");
            aStar.logVisited(aStarKOS);
            console.log("Jarak tempuh : " + aStar.countTotalCost());
        };
        return AllNodesDeclaration;
    }());
    aStarAlgorithm.AllNodesDeclaration = AllNodesDeclaration;
    AllNodesDeclaration["__class"] = "aStarAlgorithm.AllNodesDeclaration";


    var AStarSearch = (function () {
        function AStarSearch() {
            if (this.totalCost === undefined)
                this.totalCost = 0;
        }
        AStarSearch.prototype.Astarsearch = function (start, goal) {
            var closed = ([]);
            var open = ([]);
            (open.push(start) > 0);
            start.setFn(start.getGn() + start.getHn());
            var itteration = function () {
                {
                    var option;
                    if ((open.indexOf((goal)) >= 0)) {
                        var position = open.indexOf(goal);
                        option = open[position];
                    }
                    else {
                        for (var i = 0; i < open.length - 1; i++) {
                            {
                                var min = i;
                                for (var j = i + 1; j < open.length; j++) {
                                    {
                                        if (open[j].getFn() < open[min].getFn()) {
                                            min = j;
                                        }
                                    }
                                    ;
                                }
                                var temp = open[min];
                                (open[min] = open[i]);
                                (open[i] = temp);
                            }
                            ;
                        }
                        option = open[0];
                    }
                    if ((open.indexOf((option)) >= 0)) {
                        (function (a) {
                            var index = a.indexOf(option); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            }
                        })(open);
                    }
                    if (option.getLabel() === goal.getLabel()) {
                        return { value: void 0 };
                    }
                    {
                        var pathArray = option.getNodesList();
                        var _loop_2 = function (newIndex) {
                            var e = pathArray[newIndex];
                            {
                                var newNodes = e.getTargetNodes();
                                var tempcost = e.getCost();
                                var tempGn = option.getGn() + tempcost;
                                var tempFn = tempGn + newNodes.getHn();
                                if ((closed.indexOf((newNodes)) >= 0)) {
                                    return;
                                }
                                else if (!(open.indexOf((newNodes)) >= 0)) {
                                    newNodes.setFn(tempFn);
                                    newNodes.setGn(tempGn);
                                    newNodes.setRootNodes(option);
                                    if ((open.indexOf((newNodes)) >= 0)) {
                                        (function (a) {
                                            var index = a.indexOf(newNodes); if (index >= 0) {
                                                a.splice(index, 1);
                                                return true;
                                            }
                                            else {
                                                return false;
                                            }
                                        })(open);
                                    }
                                    (open.push(newNodes) > 0);
                                }
                            }
                        };
                        for (var newIndex = 0; newIndex < pathArray.length; newIndex++) {
                            _loop_2(newIndex);
                        }
                    }
                }
            };
            while (((open.length == 0) === false)) {
                var state = itteration();
                if (typeof state === "object")
                    return state.value;
            }
            ;
        };

        AStarSearch.prototype.logVisited = function (goal) {
            var rute = ([]);
            for (var n = goal; n != null; n = n.getRootNodes()) {
                {
                    (rute.push(n) > 0);
                }
                ;
            }
            this.totalCost = goal.getGn();
            for (var i = rute.length - 1; i >= 0; i--) {
                {
                    console.log(rute[i].getLabel() + " ");
                }
                ;
            }
        };

        AStarSearch.prototype.countTotalCost = function () {
            return this.totalCost;
        };
        return AStarSearch;
    }());
    aStarAlgorithm.AStarSearch = AStarSearch;
    AStarSearch["__class"] = "aStarAlgorithm.AStarSearch";


    var Nodes = (function () {
        function Nodes(label, hn) {
            if (this.label === undefined)
                this.label = null;
            if (this.gn === undefined)
                this.gn = 0;
            if (this.fn === undefined)
                this.fn = 0;
            if (this.hn === undefined)
                this.hn = 0;
            if (this.NodeList === undefined)
                this.NodeList = null;
            if (this.RootListNode === undefined)
                this.RootListNode = null;
            this.label = label;
            this.hn = hn;
            this.NodeList = ([]);
        }

        Nodes.prototype.connect = function (e) {
            (this.getNodesList().push(e) > 0);
        };

        Nodes.prototype.getLabel = function () {
            return this.label;
        };

        Nodes.prototype.getGn = function () {
            return this.gn;
        };

        Nodes.prototype.setGn = function (gn) {
            this.gn = gn;
        };

        Nodes.prototype.getFn = function () {
            return this.fn;
        };

        Nodes.prototype.setFn = function (fn) {
            this.fn = fn;
        };

        Nodes.prototype.getHn = function () {
            return this.hn;
        };

        Nodes.prototype.getNodesList = function () {
            return this.NodeList;
        };

        Nodes.prototype.getRootNodes = function () {
            return this.RootListNode;
        };

        Nodes.prototype.setRootNodes = function (RootListNode) {
            this.RootListNode = RootListNode;
        };

        return Nodes;
    }());
    aStarAlgorithm.Nodes = Nodes;
    Nodes["__class"] = "aStarAlgorithm.Nodes";


    var Edges = (function () {
        function Edges(target, cost) {
            if (this.cost === undefined)
                this.cost = 0;
            if (this.targetNodes === undefined)
                this.targetNodes = null;
            this.targetNodes = target;
            this.cost = cost;
        }

        Edges.prototype.getCost = function () {
            return this.cost;
        };

        Edges.prototype.getTargetNodes = function () {
            return this.targetNodes;
        };
        return Edges;
    }());
    aStarAlgorithm.Edges = Edges;
    Edges["__class"] = "aStarAlgorithm.Edges";
})(aStarAlgorithm || (aStarAlgorithm = {}));
aStarAlgorithm.AllNodesDeclaration.AllNodesDeclaration(null);
