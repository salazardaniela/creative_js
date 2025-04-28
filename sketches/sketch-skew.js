const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  let x, y, w, h;

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    x = width * .5;
    y = height * .5;
    w = width * .6;
    h = height * .1;

    context.save();
    context.translate(x, y);
    context.translate(w * -.5, h * -.5);

    context.strokeStyle = "blue";
    // context.strokeRect(x * -.5, y * -.5, w, h);

    context.beginPath();
    // Rectangle without translate base
    // context.moveTo(w * -.5, h * -.5);
    // context.lineTo(w * .5, h * -.5);
    // context.lineTo(w * .5, h * .5);
    // context.lineTo(w * -.5, h * .5);

    // Rectangle with translate base
    context.moveTo(0, 0);
    context.lineTo(w, 0);
    context.lineTo(w, h);
    context.lineTo(0, h);
    context.closePath();

    context.stroke();

    context.restore();
  };
};

canvasSketch(sketch, settings);
