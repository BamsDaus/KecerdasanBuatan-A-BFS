let font,
    fontsize = 12;

function Drawer() {
    var scale = 20;
    var pos = -40;
    var pointPos = scale / 2;
    //     X, Y
    var h5 = [430, 200 + pos];

    var a = [430, 270 + pos];
    var b = [500, 200 + pos];
    var c = [430, 100 + pos];
    var d = [320, 200 + pos];
    var e = [390, 270 + pos];

    var f = [320, 400 + pos];
    var g = [320, 300 + pos];
    var h = [320, 160 + pos];
    var i = [320, 100 + pos];
    var j = [150, 160 + pos];

    var kos = [100, 300 + pos];

    this.drawMaps = function () {
        line(h5[0], h5[1], a[0], a[1]);
        line(h5[0], h5[1], b[0], b[1]);
        line(h5[0], h5[1], c[0], c[1]);
        line(h5[0], h5[1], d[0], d[1]);
        line(a[0], a[1], e[0], e[1]);
        line(a[0], a[1], b[0], a[1]);
        line(e[0], e[1], e[0], f[1]);
        line(f[0], f[1], e[0], f[1]);
        line(b[0], b[1], b[0], a[1]);
        line(b[0], b[1], b[0], c[1]);
        line(c[0], c[1], b[0], c[1]);
        line(c[0], c[1], i[0], i[1]);
        line(d[0], d[1], h[0], h[1]);
        line(d[0], d[1], g[0], g[1]);
        line(e[0], e[1], g[0], g[1]);
        line(g[0], g[1], f[0], f[1]);
        line(g[0], g[1], kos[0], kos[1]);
        line(h[0], h[1], i[0], i[1]);
        line(i[0], i[1], j[0], i[1]);
        line(j[0], j[1], j[0], i[1]);
        line(j[0], j[1], h[0], h[1]);
        line(f[0], f[1], kos[0], f[1]);
        line(kos[0], kos[1], kos[0], f[1]);
        line(kos[0], kos[1], kos[0], j[1]);
        line(j[0], j[1], kos[0], j[1]);

        // circle(h5[0], h5[1], scale);

        // circle(a[0], a[1], scale);
        // circle(b[0], b[1], scale);
        // circle(c[0], c[1], scale);
        // circle(d[0], d[1], scale);
        // circle(e[0], e[1], scale);

        // circle(f[0], f[1], scale);
        // circle(g[0], g[1], scale);
        // circle(h[0], h[1], scale);
        // circle(i[0], i[1], scale);
        // circle(j[0], j[1], scale);

        // circle(kos[0], kos[1], scale);
        push();
        fill(color(0, 255, 0));
        rect(h5[0] - pointPos, h5[1] - pointPos, scale, scale);
        pop();
        text(' H5', h5[0] - pointPos, h5[1] + (pointPos / 2));

        rect(a[0] - pointPos, a[1] - pointPos, scale, scale);
        text('  A', a[0] - pointPos, a[1] + (pointPos / 2));
        rect(b[0] - pointPos, b[1] - pointPos, scale, scale);
        text('  B', b[0] - pointPos, b[1] + (pointPos / 2));
        rect(c[0] - pointPos, c[1] - pointPos, scale, scale);
        text('  C', c[0] - pointPos, c[1] + (pointPos / 2));
        rect(d[0] - pointPos, d[1] - pointPos, scale, scale);
        text('  D', d[0] - pointPos, d[1] + (pointPos / 2));
        rect(e[0] - pointPos, e[1] - pointPos, scale, scale);
        text('  E', e[0] - pointPos, e[1] + (pointPos / 2));

        rect(f[0] - pointPos, f[1] - pointPos, scale, scale);
        text('  F', f[0] - pointPos, f[1] + (pointPos / 2));
        rect(g[0] - pointPos, g[1] - pointPos, scale, scale);
        text('  G', g[0] - pointPos, g[1] + (pointPos / 2));
        rect(h[0] - pointPos, h[1] - pointPos, scale, scale);
        text('  H', h[0] - pointPos, h[1] + (pointPos / 2));
        rect(i[0] - pointPos, i[1] - pointPos, scale, scale);
        text('  I', i[0] - pointPos, i[1] + (pointPos / 2));
        rect(j[0] - pointPos, j[1] - pointPos, scale, scale);
        text('  J', j[0] - pointPos, j[1] + (pointPos / 2));

        push();
        fill(color(255, 0, 0));
        rect(kos[0] - pointPos, kos[1] - pointPos, scale, scale);
        pop();
        text('kos', kos[0] - pointPos, kos[1] + (pointPos / 2));
    }

}