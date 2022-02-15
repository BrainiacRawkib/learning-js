$(document).ready(function () {
    'use strict';
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TODO
    let c = Shape.circle(200, 200, 50);
    c.fillColor = 'green';

    paper.view.draw();

    var tool = new Tool();

    tool.onmousedown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }
})
