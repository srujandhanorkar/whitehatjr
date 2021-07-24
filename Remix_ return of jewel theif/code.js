var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1,laser2,theif,diamond;

 laser1=createSprite(100,155,200,5);
laser1.shapeColor="red";
laser1.velocityY=-3;
 
laser2=createSprite(300,130,200,5);
laser2.shapeColor="red";
laser2.velocityY=3;

theif=createSprite(10,390,20,20);

function draw() {
  
  background("white");
  createEdgeSprites();
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  shape(390,0,380,10 ,390,20,400,10);
  drawSprites();
  
  if(keyDown(RIGHT_ARROW)){
    theif.velocityX=2;
    theif.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW)){
    theif.velocityX=-2;
    theif.velocityY=0;
  }
  
  if(keyDown(UP_ARROW)){
    theif.velocityX=0;
    theif.velocityY=-2;
  }
  if(keyDown(DOWN_ARROW)){
    theif.velocityX=0;
    theif.velocityY=2;
   }
  
  if(laser1.isTouching(theif) || laser2.isTouching(theif) )  {
   stroke(0);
   fill(0);
    textSize(24);
    text("theif is Caught",120,200);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    theif.setVelocity(0,0);
}

}
  



  


  


  
  
  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
