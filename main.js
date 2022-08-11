noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , got_poses);
}
function modelloaded(){
    console.log ("poseNet is Initialize");
}
function got_poses(results){
    if(results.length > 0 ){
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw(){
    image (video, 0, 0, 400, 300);
   image(mustache,noseX-20, noseY-10, 50, 50);
}
function takeSnapshot(){
    save('anwesha.jpg');
}

