(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈_atlas_1", frames: [[0,0,333,314],[416,0,82,229],[335,0,79,431]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,215.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.75,1,1,0,0,0,19.2,1.6);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-109,-64.2,1,1,0,0,0,86.4,2.1);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.65,-279.7,1,1,0,0,0,39.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0,x:-109,y:-64.2,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.75,regX:19.2,regY:1.6}}]}).to({state:[{t:this.ikNode_1,p:{rotation:0.396,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0.6391,x:-110.4,y:-64.45,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0.3576,x:-115.15,y:90.35,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0.793,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:1.2783,x:-111.9,y:-64.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0.7143,x:-118.35,y:90,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.1891,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:1.9176,x:-113.35,y:-65.05,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.0719,x:-121.6,y:89.6,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.5861,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:2.5572,x:-114.9,y:-65.35,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.4296,x:-124.8,y:89.2,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.9824,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:3.1971,x:-116.35,y:-65.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.7873,x:-128,y:88.75,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:2.3796,x:-69.6,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:3.8365,x:-117.85,y:-65.95,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.1451,x:-131.15,y:88.25,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:2.776,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:4.4755,x:-119.3,y:-66.3,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.503,x:-134.35,y:87.8,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.1726,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:5.1152,x:-120.8,y:-66.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.86,x:-137.6,y:87.25,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.5694,x:-69.6,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:5.7545,x:-122.25,y:-67.05,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.2173,x:-140.9,y:86.65,regX:19.1,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.9662,x:-69.55,y:-279.6,regY:0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:6.3937,x:-123.85,y:-67.4,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.5755,x:-143.95,y:86.1,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.3624,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:7.0337,x:-125.2,y:-67.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.9329,x:-147.15,y:85.45,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.7588,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:7.6728,x:-126.7,y:-68.15,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:4.2905,x:-150.3,y:84.85,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:5.1556,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:8.3128,x:-128.1,y:-68.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:4.6475,x:-153.5,y:84.15,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:5.5524,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:8.9522,x:-129.6,y:-69,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:5.0054,x:-156.65,y:83.5,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:5.9486,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:9.5918,x:-131,y:-69.4,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:5.3627,x:-159.8,y:82.75,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.3453,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:10.2309,x:-132.5,y:-69.85,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:5.7202,x:-162.95,y:81.95,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.7422,x:-69.4,y:-279.6,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:10.8703,x:-133.95,y:-70.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:6.078,x:-166.1,y:81.3,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:7.1386,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:11.51,x:-135.35,y:-70.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:6.436,x:-169.2,y:80.35,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:7.5353,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:12.1487,x:-136.95,y:-71.2,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:6.7933,x:-172.5,y:79.5,regX:19.1,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:7.9323,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:12.7889,x:-138.25,y:-71.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.1508,x:-175.45,y:78.75,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.3288,x:-69.5,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:13.4281,x:-139.7,y:-72.15,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.5087,x:-178.55,y:77.7,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.7257,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:14.0672,x:-141.1,y:-72.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.866,x:-181.7,y:76.8,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.1221,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:14.7072,x:-142.7,y:-73.15,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:8.2236,x:-184.8,y:75.9,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.5182,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:15.3461,x:-144,y:-73.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:8.5815,x:-187.85,y:74.8,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.9155,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:15.9863,x:-145.55,y:-74.2,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:8.9389,x:-190.95,y:73.9,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:10.3116,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:16.6257,x:-146.8,y:-74.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:9.2966,x:-194,y:72.85,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:10.7083,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:17.2646,x:-148.2,y:-75.2,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:9.6539,x:-197.05,y:71.65,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:11.1054,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:17.9038,x:-149.65,y:-75.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:10.0114,x:-200.15,y:70.65,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:11.5021,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:18.5436,x:-151.05,y:-76.3,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:10.3686,x:-203.15,y:69.4,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:11.1188,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:17.926,x:-149.7,y:-75.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:10.023,x:-200.25,y:70.6,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:10.7349,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:17.3077,x:-148.3,y:-75.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:9.6778,x:-197.25,y:71.6,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:10.3516,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:16.6896,x:-146.95,y:-74.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:9.3321,x:-194.3,y:72.65,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.968,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:16.071,x:-145.75,y:-74.25,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:8.9867,x:-191.35,y:73.75,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.5846,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:15.4533,x:-144.2,y:-73.8,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:8.6407,x:-188.35,y:74.75,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:9.201,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:14.8346,x:-142.95,y:-73.2,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:8.2952,x:-185.4,y:75.6,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.8177,x:-69.5,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:14.2169,x:-141.45,y:-72.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.949,x:-182.4,y:76.55,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.4348,x:-69.55,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:13.599,x:-140.05,y:-72.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.604,x:-179.4,y:77.6,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:8.0515,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:12.9809,x:-138.65,y:-71.8,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:7.2584,x:-176.4,y:78.4,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:7.6676,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:12.3626,x:-137.3,y:-71.35,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:6.9121,x:-173.4,y:79.2,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:7.2839,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:11.7441,x:-135.9,y:-70.85,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:6.5671,x:-170.5,y:80.15,regX:19.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.9007,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:11.1258,x:-134.55,y:-70.6,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:6.2212,x:-167.35,y:80.95,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.5177,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:10.5082,x:-133.1,y:-70.05,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:5.8758,x:-164.3,y:81.6,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:6.1343,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:9.8898,x:-131.7,y:-69.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:5.5296,x:-161.3,y:82.4,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:5.751,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:9.2719,x:-130.4,y:-69.35,regX:86.3,regY:2}},{t:this.ikNode_4,p:{rotation:5.1845,x:-158.25,y:83.2,regX:19.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:5.3671,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:8.6532,x:-128.9,y:-68.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:4.8387,x:-155.15,y:83.8,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.9835,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:8.0355,x:-127.5,y:-68.35,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:4.4931,x:-152.1,y:84.45,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.6001,x:-69.6,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:7.417,x:-126.05,y:-68,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:4.1477,x:-149.05,y:85.1,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:4.2169,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:6.7994,x:-124.65,y:-67.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.8015,x:-146,y:85.7,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.8339,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:6.1809,x:-123.25,y:-67.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.4564,x:-142.9,y:86.3,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.4502,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:5.563,x:-121.8,y:-66.9,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:3.1104,x:-139.95,y:86.9,regX:19.1,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:3.0666,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:4.9449,x:-120.4,y:-66.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.7647,x:-136.75,y:87.45,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:2.6832,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:4.3265,x:-118.95,y:-66.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.419,x:-133.6,y:87.9,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:2.2999,x:-69.6,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:3.7086,x:-117.65,y:-65.9,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:2.0733,x:-130.55,y:88.4,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.9168,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:3.0903,x:-116.1,y:-65.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.7278,x:-127.45,y:88.85,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.5328,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:2.4723,x:-114.8,y:-65.35,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.3824,x:-124.35,y:89.25,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:1.1497,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:1.8538,x:-113.2,y:-65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:1.0369,x:-121.25,y:89.65,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0.7668,x:-69.55,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:1.2354,x:-111.8,y:-64.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0.6907,x:-118.1,y:90.05,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0.3829,x:-69.55,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0.6172,x:-110.35,y:-64.4,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0.3453,x:-115.05,y:90.35,regX:19.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0,x:-109,y:-64.2,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.75,regX:19.2,regY:1.6}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.2,-287.5,253.29999999999998,491.2);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.75,1,1,0,0,0,19.2,1.6);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-109,-64.2,1,1,0,0,0,86.4,2.1);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.65,-279.7,1,1,0,0,0,39.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{rotation:0,x:-69.65,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0,x:-109,y:-64.2,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.75}}]}).to({state:[{t:this.ikNode_1,p:{rotation:-0.9504,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-0.5595,x:-105.4,y:-63.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0201,x:-106.9,y:91.35}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-1.9019,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-1.1191,x:-101.8,y:-62.95,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0411,x:-101.8,y:91.9}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-2.8522,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-1.6788,x:-98.25,y:-62.45,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0621,x:-96.65,y:92.4}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-3.8033,x:-69.65,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-2.2387,x:-94.55,y:-61.95,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0831,x:-91.55,y:92.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-4.7545,x:-69.65,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-2.7979,x:-91,y:-61.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.104,x:-86.4,y:93.15}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-5.7053,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-3.3582,x:-87.4,y:-61.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.125,x:-81.3,y:93.4}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-6.6559,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-3.9181,x:-83.7,y:-61,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.146,x:-76.15,y:93.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-7.6066,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-4.4774,x:-80.1,y:-60.8,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1661,x:-71,y:93.75}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-8.5577,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-5.0371,x:-76.45,y:-60.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1871,x:-65.85,y:93.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-9.5093,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-5.5972,x:-72.85,y:-60.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2081,x:-60.7,y:93.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-10.4601,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-6.1563,x:-69.2,y:-60.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2291,x:-55.6,y:93.65}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-11.4111,x:-69.65,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-6.7166,x:-65.55,y:-60.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.25,x:-50.45,y:93.45}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-12.3617,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-7.276,x:-61.95,y:-60.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.271,x:-45.3,y:93.2}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-13.3132,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-7.836,x:-58.3,y:-60.8,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.292,x:-40.15,y:92.9}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-14.2638,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-8.3959,x:-54.8,y:-61,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3121,x:-35.05,y:92.5}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-15.2149,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-8.9548,x:-51.05,y:-61.4,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:-0.3331,x:-29.9,y:92.05}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-16.1656,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-9.5146,x:-47.45,y:-61.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3541,x:-24.8,y:91.5}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-17.1164,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-10.0745,x:-43.95,y:-62.05,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3751,x:-19.7,y:90.85}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-18.0675,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-10.6344,x:-40.25,y:-62.6,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:-0.396,x:-14.6,y:90.2}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-19.0183,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-11.1944,x:-36.6,y:-63,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.417,x:-9.5,y:89.4}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-19.969,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-11.7538,x:-33,y:-63.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.438,x:-4.45,y:88.55}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-20.9206,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-12.3134,x:-29.45,y:-64.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4581,x:0.65,y:87.65}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-21.8711,x:-69.65,y:-279.7,regY:-0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-12.8733,x:-25.85,y:-64.9,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4791,x:5.7,y:86.65}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-22.8218,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-13.4336,x:-22.3,y:-65.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5001,x:10.7,y:85.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-23.7727,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-13.9932,x:-18.75,y:-66.45,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5211,x:15.75,y:84.45}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-24.724,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-14.5526,x:-15.2,y:-67.3,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5421,x:20.65,y:83.2}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-25.6747,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-15.1124,x:-11.75,y:-68.25,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.563,x:25.6,y:81.9}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-26.6257,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-15.6719,x:-8.2,y:-69.35,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:-0.584,x:30.6,y:80.55}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-27.577,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-16.2321,x:-4.8,y:-70.4,regX:86.4,regY:2}},{t:this.ikNode_4,p:{rotation:-0.6041,x:35.55,y:79.15}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-26.6577,x:-69.65,y:-279.7,regY:-0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-15.691,x:-8.1,y:-69.3,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.584,x:30.75,y:80.5}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-25.7381,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-15.1495,x:-11.5,y:-68.3,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5639,x:25.95,y:81.85}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-24.8194,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-14.6086,x:-14.85,y:-67.4,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5438,x:21.15,y:83.1}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-23.8999,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-14.0672,x:-18.3,y:-66.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5237,x:16.4,y:84.25}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-22.9805,x:-69.65,y:-279.7,regY:-0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-13.5261,x:-21.7,y:-65.75,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.5036,x:11.55,y:85.4}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-22.0613,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-12.9855,x:-25.15,y:-65.05,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4835,x:6.7,y:86.45}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-21.1418,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-12.444,x:-28.6,y:-64.35,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4634,x:1.8,y:87.45}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-20.2232,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-11.903,x:-32.05,y:-63.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4433,x:-3.1,y:88.35}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-19.3034,x:-69.55,y:-279.45,regY:0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-11.3621,x:-35.55,y:-63.15,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.4231,x:-8,y:89.15}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-18.3841,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-10.8213,x:-39,y:-62.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.403,x:-12.9,y:89.95}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-17.4653,x:-69.55,y:-279.45,regY:0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-10.2797,x:-42.6,y:-62.2,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3829,x:-17.8,y:90.65}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-16.5455,x:-69.6,y:-279.55,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-9.739,x:-46,y:-61.8,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3628,x:-22.75,y:91.3}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-15.6266,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-9.1974,x:-49.45,y:-61.45,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3427,x:-27.7,y:91.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-14.7072,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-8.6567,x:-53.1,y:-61.1,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3226,x:-32.65,y:92.3}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-13.7879,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-8.1159,x:-56.45,y:-60.9,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.3016,x:-37.6,y:92.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-12.8689,x:-69.6,y:-279.75,regY:-0.1,regX:39.4}},{t:this.ikNode_2,p:{rotation:-7.5748,x:-59.95,y:-60.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2815,x:-42.55,y:93.05}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-11.9495,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-7.0337,x:-63.5,y:-60.6,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2614,x:-47.55,y:93.35}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-11.0305,x:-69.65,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-6.4923,x:-67,y:-60.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2413,x:-52.5,y:93.55}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-10.1108,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-5.9514,x:-70.55,y:-60.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2212,x:-57.45,y:93.75}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-9.1921,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-5.4102,x:-74.05,y:-60.55,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.2011,x:-62.45,y:93.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-8.2732,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-4.8694,x:-77.55,y:-60.7,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.181,x:-67.4,y:93.8}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-7.3536,x:-69.55,y:-279.6,regY:0,regX:39.5}},{t:this.ikNode_2,p:{rotation:-4.3282,x:-81.1,y:-60.8,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1609,x:-72.4,y:93.7}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-6.4341,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-3.7875,x:-84.6,y:-61.05,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1408,x:-77.35,y:93.6}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-5.5147,x:-69.65,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-3.2462,x:-88.2,y:-61.35,regX:86.3,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1207,x:-82.3,y:93.35}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-4.5957,x:-69.65,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-2.7051,x:-91.6,y:-61.65,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.1005,x:-87.25,y:93.1}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-3.6762,x:-69.65,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-2.1635,x:-95.05,y:-62,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0804,x:-92.25,y:92.75}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-2.7576,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-1.6229,x:-98.6,y:-62.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0603,x:-97.2,y:92.35}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-1.838,x:-69.6,y:-279.6,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-1.0815,x:-102,y:-63,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0402,x:-102.1,y:91.85}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:-0.9189,x:-69.6,y:-279.65,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:-0.5403,x:-105.55,y:-63.5,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:-0.0201,x:-107.05,y:91.3}}]},1).to({state:[{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0,regX:39.4}},{t:this.ikNode_2,p:{rotation:0,x:-108.95,y:-64.15,regX:86.4,regY:2.1}},{t:this.ikNode_4,p:{rotation:0,x:-111.95,y:90.75}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,310.9,486.5);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(106.4,50.3,0.9999,0.9999,-19.3718,0,0,19.1,1.7);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(32.35,-86.05,0.9999,0.9999,-29.6263,0,0,86.3,1.9);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.9,0.9999,0.9999,-38.1473,0,0,39.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-38.1473,y:-279.9,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.6263,x:32.35,y:-86.05,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.1,scaleX:0.9999,scaleY:0.9999,rotation:-19.3718,x:106.4,y:50.3,regY:1.7}}]}).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-37.5004,y:-279.85,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.1242,x:30.2,y:-84.9,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-19.0439,x:103.2,y:52.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-36.8547,y:-279.75,regX:39.4,x:-69.7,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.6217,x:28.05,y:-83.8,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-18.7148,x:99.8,y:53.75,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-36.2081,y:-279.7,regX:39.4,x:-69.65,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.1201,x:25.75,y:-82.6,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.1,scaleX:0.9998,scaleY:0.9998,rotation:-18.3871,x:96.15,y:55.45,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-35.5618,y:-279.8,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.6171,x:23.55,y:-81.55,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-18.0583,x:92.9,y:57.05,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-34.9162,y:-279.8,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.1157,x:21.35,y:-80.6,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-17.7289,x:89.45,y:58.7,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-34.2685,y:-279.8,regX:39.4,x:-69.65,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.6124,x:19.1,y:-79.55,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-17.4012,x:85.9,y:60.35,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-33.6209,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.1114,x:16.85,y:-78.55,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-17.0743,x:82.5,y:61.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-32.9748,y:-279.85,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.6096,x:14.55,y:-77.65,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-16.7451,x:79,y:63.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-32.3279,y:-279.85,regX:39.5,x:-69.65,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.107,x:12.3,y:-76.7,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.1,scaleX:0.9998,scaleY:0.9998,rotation:-16.417,x:75.3,y:65.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-31.6808,y:-279.8,regX:39.4,x:-69.75,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.605,x:9.9,y:-75.7,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-16.0888,x:71.85,y:66.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-31.0348,y:-279.8,regX:39.5,x:-69.6,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.1033,x:7.6,y:-74.8,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-15.7597,x:68.3,y:67.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.3886,y:-279.8,regX:39.4,x:-69.7,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.6007,x:5.35,y:-74,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-15.4317,x:64.75,y:69.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.7417,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.0993,x:3.1,y:-73.15,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-15.1037,x:61.2,y:70.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.0961,y:-279.8,regX:39.5,x:-69.65,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.5965,x:0.65,y:-72.45,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.1,scaleX:0.9998,scaleY:0.9998,rotation:-14.7743,x:57.5,y:72.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.448,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.0942,x:-1.65,y:-71.7,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-14.4454,x:53.9,y:73.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.8017,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.5923,x:-3.95,y:-70.85,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-14.1177,x:50.25,y:74.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.1552,y:-279.7,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.0892,x:-6.35,y:-70.1,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-13.79,x:46.7,y:75.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.5083,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.5862,x:-8.75,y:-69.35,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-13.4615,x:43.05,y:76.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.8623,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.0846,x:-11.1,y:-68.75,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-13.1325,x:39.35,y:77.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.2157,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.5818,x:-13.45,y:-68,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.1,scaleX:0.9998,scaleY:0.9998,rotation:-12.8043,x:35.65,y:79,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.5682,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.0807,x:-15.85,y:-67.4,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-12.4753,x:32.05,y:80.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.922,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.5785,x:-18.25,y:-66.85,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-12.1469,x:28.35,y:80.95,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.2767,y:-279.7,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.0766,x:-20.6,y:-66.25,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-11.8196,x:24.6,y:82.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.6294,y:-279.85,regX:39.5,x:-69.65,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.5752,x:-23.1,y:-65.9,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-11.4919,x:20.95,y:83,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.9823,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.0715,x:-25.45,y:-65.25,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-11.1621,x:17.3,y:83.9,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.3367,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.5698,x:-27.85,y:-64.75,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-10.8342,x:13.5,y:84.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.6895,y:-279.7,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.0678,x:-30.4,y:-64.2,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-10.5066,x:9.8,y:85.4,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.0421,y:-279.75,regX:39.5,x:-69.6,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.5651,x:-32.75,y:-63.8,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-10.177,x:6.1,y:86.2,regY:1.6}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.3954,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.063,x:-35.2,y:-63.4,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-9.8493,x:2.35,y:87,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.7499,y:-279.8,regX:39.5,x:-69.55,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.5618,x:-37.6,y:-63.05,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-9.52,x:-1.45,y:87.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.1026,y:-279.7,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.0583,x:-40.1,y:-62.7,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-9.1922,x:-5.25,y:88.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.4563,y:-279.85,regX:39.5,x:-69.6,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.5559,x:-42.5,y:-62.4,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-8.8646,x:-9.05,y:89,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.8101,y:-279.7,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.0536,x:-44.95,y:-62.25,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-8.5356,x:-12.75,y:89.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.1624,y:-279.75,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.5521,x:-47.45,y:-61.85,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-8.2076,x:-16.55,y:90.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.5161,y:-279.7,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.051,x:-49.9,y:-61.6,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-7.8789,x:-20.35,y:90.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.8696,y:-279.65,regX:39.4,x:-69.7,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.5488,x:-52.35,y:-61.4,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-7.5507,x:-24.15,y:91.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.2227,y:-279.7,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.0469,x:-54.8,y:-61.2,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-7.222,x:-28,y:91.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.5766,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.543,x:-57.25,y:-61.15,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-6.8933,x:-31.75,y:91.9,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.9299,y:-279.85,regX:39.5,x:-69.55,regY:-0.2}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.0418,x:-59.9,y:-61.05,regX:86.2,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-6.5657,x:-35.55,y:92.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.2837,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.5387,x:-62.25,y:-60.9,regX:86.3,regY:1.8}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-6.2358,x:-39.4,y:92.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.6366,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.0361,x:-64.7,y:-60.75,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-5.9086,x:-43.2,y:92.75,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.991,y:-279.65,regX:39.4,x:-69.65,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.5346,x:-67.1,y:-60.65,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-5.5807,x:-47.05,y:93.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.3432,y:-279.75,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.0327,x:-69.65,y:-60.65,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-5.2522,x:-50.85,y:93.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.6966,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.5304,x:-72.1,y:-60.65,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-4.9238,x:-54.65,y:93.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.0505,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.0288,x:-74.5,y:-60.7,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-4.5957,x:-58.45,y:93.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.4038,y:-279.6,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.526,x:-77.1,y:-60.75,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-4.2668,x:-62.25,y:93.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.7564,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.0246,x:-79.5,y:-60.85,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-3.9381,x:-66.15,y:93.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.11,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.5219,x:-81.9,y:-61,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-3.6104,x:-70,y:93.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.4635,y:-279.65,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.0204,x:-84.45,y:-61.2,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-3.2818,x:-73.8,y:93.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.8162,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.5167,x:-86.9,y:-61.3,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-2.9535,x:-77.55,y:93.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.1706,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.0161,x:-89.3,y:-61.6,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-2.6251,x:-81.35,y:93.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.5247,y:-279.65,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.5139,x:-91.95,y:-61.75,regX:86.2,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-2.296,x:-85.2,y:93.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.8777,y:-279.55,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.0112,x:-94.25,y:-62.1,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-1.9688,x:-89,y:92.85,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.231,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.5087,x:-96.7,y:-62.35,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-1.6398,x:-92.8,y:92.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.5848,y:-279.65,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.0072,x:-99.1,y:-62.55,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-1.3109,x:-96.6,y:92.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.9381,y:-279.6,regX:39.5,x:-69.55,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.5033,x:-101.6,y:-62.9,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-0.9829,x:-100.45,y:91.9,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.2908,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.0022,x:-104,y:-63.3,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-0.6541,x:-104.3,y:91.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.6436,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4993,x:-106.5,y:-63.7,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:-0.3262,x:-108.05,y:91.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:0,y:-279.6,regX:39.5,x:-69.5,regY:-0.1}},{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:0,x:-108.9,y:-64.15,regX:86.3,regY:1.9}},{t:this.ikNode_4,p:{regX:19.2,scaleX:0.9998,scaleY:0.9998,rotation:0,x:-111.8,y:90.75,regY:1.7}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.2,-279.8,373.9,487.20000000000005);


// stage content:
(lib.燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(101.45,172.95,0.6973,0.6973,14.5207,0,0,33.6,-58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(438.8,198.2,0.82,0.82,0,0,0,-112,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大燈籠
	this.ikNode_11 = new lib.大燈籠();
	this.ikNode_11.name = "ikNode_11";
	this.ikNode_11.setTransform(246.1,241.6,1,1,0,0,0,-80,-38.1);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_11).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.5,280.4,287.9);
// library properties:
lib.properties = {
	id: 'D06C7AF20DE81A4BA4A978CD102DCBF3',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈_atlas_1.png?1639971897435", id:"燈_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D06C7AF20DE81A4BA4A978CD102DCBF3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;