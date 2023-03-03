function setup() {

}

// webgazer.begin();

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    // console.log(elapsedTime); //elapsed time is based on time since begin was called
    console.log(data.x)
    console.log(data.y)
}).begin();

var prediction = webgazer.getCurrentPrediction();
if (prediction) {
	// var x = prediction.x;
	// var y = prediction.y;

	// console.log(x);
	// console.log(y);
	console.log("AH")
	console.log(prediction)
}

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener( 'resize', ( ) =>
    {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
    });