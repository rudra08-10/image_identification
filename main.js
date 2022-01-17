var previous_result="";
function setup() 
{
  canvas = createCanvas(250,250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded);
}
function draw()
{
image(video,0,0,250,250);
classifier.classify(video,gotResults);
}
function modelloaded()
{
  console.log('model has been loaded ');
}
function gotResults(error,results)
{
  if(error)
  {
    console.log(error)
  }
  else
  {
    if((results[0].confidence > 0.5) && (previous_result != results[0].label))
    {
      console.log(results);
      previous_result=results[0].label;
      document.getElementById("object_name").innerHTML=results[0].label;
      document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed[3];
    }
  }
}
