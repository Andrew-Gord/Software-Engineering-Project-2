var Sketchpad = require('responsive-sketchpad');

// Initialize Sketchpad
var el = document.getElementById('sketchpad');
var pad = new Sketchpad(el, {
    line: {
        color: '#f44335',
        size: 5
    }
});

// Set line color
pad.setLineColor('#f44336');

// Set line size
pad.setLineSize(10);

// Undo
pad.undo();

// Redo
pad.redo();

// Clear canvas
pad.clear();

// Resize canvas
pad.resize(100);

// Make read only
pad.setReadOnly(true);