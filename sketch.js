let img;
let glitch;
let im;
let glitch2;
let glitch3;
let img3;

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  glitch = new Glitch();     
  loadImage('https://qph.fs.quoracdn.net/main-qimg-1f1d906ae98e7f5f40c362238e4b81f8-c', function(img){
    glitch.loadImage(img)
  });  
 
   glitch2 = new Glitch();     loadImage('https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png', function(im){
    glitch2.loadImage(im)
  });

    glitch3 = new Glitch();     loadImage('https://f2.toyhou.se/file/f2-toyhou-se/characters/11632771?1624493893', function(img3){
    glitch3.loadImage(img3)
  });
  
}

function draw() {
  if(keyIsPressed && key === 'f'){
    glitch.randomBytes(1)
    glitch.buildImage(function(img){image(glitch.image, 0, 0,glitch.width, glitch.height)});
}
  else{
    if(keyIsPressed && key === 'u'){
    glitch2.randomBytes(1)
    glitch2.buildImage(function(im){image(glitch2.image, 0, 0,glitch2.width, glitch2.height)});
    }
  else{
   if(keyIsPressed && key === 'g'){
    glitch3.randomBytes(1)
    glitch3.buildImage(function(img3){image(glitch3.image, 0, 0,glitch3.width, glitch3.height)});
   }
  }
  }
}