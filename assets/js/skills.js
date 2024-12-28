window.onload = function() {
    try {
      TagCanvas.Start('uniqueCanvas', 'uniqueTags', {
        textColour: '#00FF00',
        outlineColour: '#FF0000',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        initial: [0.1, -0.1],
        weight: true
      });
    } catch(e) {
      console.log('Canvas error: ', e);
      document.getElementById('uniqueCanvasContainer').style.display = 'none';
    }
  };
  