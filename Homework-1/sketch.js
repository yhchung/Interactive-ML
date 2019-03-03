let video;
let classifier;
let name, prpbability;
let texts = [];
let pre_name;

let pg;

let params = {
  stop: false,
  text_length: 20
}

let gui = new dat.gui.GUI();
gui.add(params, "stop");
gui.add(params, "text_length").min(10).max(30);

class ZText {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
  }
  display() {
    pg.fill(random(255), random(255), random(255));
    pg.text(this.text, this.x, this.y);
    pg.textSize(random(10, 20));
  }

  move() {
    this.x += 1;
  }

  bounce() {
    if (this.x >= this.width) {
      this.x -= 1;
    } else if (this.x <= 0) {
      this.x += 1;
    }
  }
}

function setup() {
  createCanvas(640, 480);
  frameRate(10);
  pg = createGraphics(640, 480);

  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier('MobileNet', video, modelLoaded);
}


function draw() {
  classifyVideo();
  //update name
  if (!params.stop) {
    image(video, 0, 0);
  }

  if (pre_name !== name) {
    if (name != undefined) {

      texts.push(new ZText("You are " + name, random(0, 640), random(0, 480)));



      for (let i = 0; i < texts.length; i++) {
        texts[i].display();
        texts[i].move();

      }
      if (texts.length > params.text_length) {
        // console.log(texts);
        texts.splice(0, 1);
      }
    }
  }
  image(pg, 0, 0);

  // console.log(pre_name);
  // console.log(name);
  // if (pre_name !== name) {
  //   console.log("different");
  // }


  pre_name = name;
}

function mousePressed() {
  pg.clear();
}

function modelLoaded() {
  console.log("Model Loaded");
  // classifyVideo();
}

function classifyVideo() {
  classifier.predict(gotResult);
}

function gotResult(err, results) {
  // The results are in an array ordered by probability.
  // for (let i = 0; i < results.length; i++) {
  if (results[0].probability > 0.5) {
    // console.log(results[0].className);
    name = results[0].className;
    name.toString();
    // probability = nf(results[0].probability, 0, 2);
  }

  // }

  // classifyVideo();
}