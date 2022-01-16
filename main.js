status = "";
objects = [];

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    object = document.getElementById("name").value;
}
function modeLoaded()
{
    console.log("MODEL LOADED!");
    status = true;
}
function draw()
{
    image(video, 0, 0, 380, 380);
}
