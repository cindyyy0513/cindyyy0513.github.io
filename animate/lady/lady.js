(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lady_atlas_1", frames: [[474,669,54,128],[474,877,312,103],[280,436,299,231],[0,718,231,138],[280,669,192,322],[625,0,180,465],[581,467,153,408],[0,436,278,280],[0,0,623,434]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgzZAiSMAAAhEjMBmzAAAMAAABEjg");
	mask.setTransform(329.025,219.375);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0859,0.0859);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,658.1,438.8), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手握筆
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-104,-77.55,1,1,0,0,0,329,219.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(-433,-296.8,658.1,438.70000000000005), null);


// stage content:
(lib.lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen01
	this.instance = new lib.手握筆();
	this.instance.setTransform(219.3,301.95,1,1,0,0,0,-104,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:200.95,y:274.6},0).wait(1).to({x:263.6,y:249.7},0).wait(1).to({x:210.75,y:203.8},0).wait(1).to({x:241.25,y:192.8},0).wait(1).to({x:272.65},0).wait(1).to({x:299.75,y:208.05},0).wait(1).to({x:322.65,y:231.75},0).wait(1).to({x:338.75,y:258.85},0).wait(1).to({x:360.8,y:277.3},0).wait(1).to({x:381.95,y:307.95},0).wait(1).to({x:398.35,y:334.2},0).wait(1).to({x:420.35,y:363.05},0).wait(1).to({x:440.65,y:377.45},0).wait(1).to({x:461.8,y:400.3},0).wait(1).to({x:490.6},0).wait(1).to({x:508.4,y:382.55},0).wait(1).to({x:495.6,y:362},0).wait(1).to({x:482.9,y:340},0).wait(1).to({x:462.95,y:316.7},0).to({_off:true},1).wait(120));

	// 遮色片01 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah2B2QgwgwAAhGQAAhFAwgwQAygyBEAAQBFAAAyAyQAwAwAABFQAABGgwAwQgyAyhFAAQhEAAgygyg");
	var mask_graphics_1 = new cjs.Graphics().p("AgdEkQgwgxAAhFQgBgzAagnQhSgDg8g7Qg9g9gBhYQABhZA9g+QA/g+BYAAQBXAAA+A+QA/A+gBBZQAABOgyA5QAzAJAnAmQAwAxAABGQAABFgwAxQgyAxhFAAQhFAAgxgxg");
	var mask_graphics_2 = new cjs.Graphics().p("AAEHfQgwgxAAhGQAAgyAagoQhSgCg8g8Qg+g+AAhYQAAhXA+g+IAOgNQgsgQgkgkQg/g/AAhaQAAhaA/hAQBAhABaAAQBZAABABAQBABAAABaQAABahAA/IgRAQQAqAPAiAiQA+A+AABXQAABPgyA6QAzAIAmAnQAxAxAABFQAABGgxAxQgxAxhFAAQhGAAgxgxg");
	var mask_graphics_3 = new cjs.Graphics().p("AACJiQgwgxAAhGQAAgyAagoQhSgCg8g8Qg+g+AAhYQAAhYA+g+IAOgNQgsgQgkgjQg/g/AAhaQAAhaA/hAQAxgxBBgLQgIgcAAgeQAAhWA9g9QA9g9BVAAQBWAAA8A9QA9A9AABWQAABWg9A8QgrAsg4AMQALAhAAAlQAABahAA/IgRAQQAqAOAiAiQA+A+AABYQAABPgyA6QAzAIAmAnQAxAxAABFQAABGgxAxQgxAxhFAAQhGAAgxgxg");
	var mask_graphics_4 = new cjs.Graphics().p("AiEKdQgxgxAAhFQAAgzAZgnQhSgDg7g7Qg+g+AAhYQAAhZA+g+IAOgNQgsgQgkgkQhAg+AAhaQAAhaBAhAQAxgxBBgLQgIgbAAgfQAAhWA8g9QA9g8BWAAQAxAAAoATQANgsAkgkQA6g6BTAAQBSAAA6A6QA7A6AABTQAABSg7A6Qg6A7hSAAQgrAAglgQQgNAzgoAnQgrAsg4AMQAKAhAAAlQAABag/A+IgQAQQApAPAhAiQA/A+AABZQAABOgzA6QAzAJAnAmQAxAxAABGQAABFgxAxQgxAxhFAAQhFAAgxgxg");
	var mask_graphics_5 = new cjs.Graphics().p("AksK7QgxgxAAhFQAAgzAZgnQhSgDg7g7Qg+g+AAhYQAAhZA+g+IAOgNQgsgQgkgkQhAg/AAhZQAAhaBAhAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA8g8BWAAQAxAAApATQAOgsAjgkQA6g6BSAAQBSAAA7A6IAQASQANgsAjgkQA5g4BPAAQBRAAA4A4QA5A5AABQQAABQg5A5Qg4A4hRAAQhPAAg5g4IgOgPQgNAvglAlQg7A7hSAAQgrAAgjgQQgOAzgoAnQgrAsg4AMQAKAhABAlQAABZhBA/IgQAQQAqAPAhAiQA/A+AABZQAABOgyA6QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhGAAQhFAAgxgxg");
	var mask_graphics_6 = new cjs.Graphics().p("Am+K7QgxgxAAhFQAAgzAZgnQhSgDg7g7Qg+g+AAhYQAAhZA+g+IAOgNQgsgQgkgkQhAg/AAhZQAAhaBAhAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA8g8BWAAQAxAAApATQAOgsAjgkQA6g6BTAAQBSAAA6A6IAQASQANgsAjgkQA5g4BPAAQBRAAA4A4QA5A5AABQIAAAGQAYgEAaABQBkAABGAzQBHA1AABJQAABKhHA0QhGA1hkgBQhkABhHg1QhAgwgGhBIgDAAQhPAAg5g4IgOgPQgNAvglAlQg6A7hSAAQgrAAgkgQQgOAzgoAnQgrAsg4AMQAKAhABAlQAABZhBA/IgQAQQAqAPAhAiQA/A+AABZQAABOgyA6QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhGAAQhFAAgxgxg");
	var mask_graphics_7 = new cjs.Graphics().p("AogK7QgwgxAAhFQgBgzAagnQhSgDg8g7Qg9g+gBhYQABhZA9g+IAPgNQgtgQgjgkQhAg/AAhZQAAhaBAhAQAxgxBAgLQgHgbAAgfQgBhWA9g9QA9g8BWAAQAxAAApATQANgsAkgkQA6g6BTAAQBSAAA6A6IAQASQANgsAigkQA5g4BQAAQBQAAA5A4QA4A5AABQIAAAGQAYgEAbABQBjAABHAzQBHA1AABJIgBARQBOAGA4A4QA+A+AABYQAABYg+A9Qg+A+hYAAQhYAAg+g+Qg+g9AAhYQAAgbAGgYIgSAAQhlABhGg1QhBgwgFhBIgDAAQhQAAg5g4IgNgPQgMAvgmAlQg6A7hSAAQgrAAglgQQgOAzgnAnQgsAsg4AMQALAhAAAlQAABZhAA/IgRAQQAqAPAiAiQA/A+gBBZQAABOgyA6QAzAJAnAmQAwAxAABGQAABFgwAxQgyAxhFAAQhFAAgygxg");
	var mask_graphics_8 = new cjs.Graphics().p("AqSK7QgxgxAAhFQAAgzAagnQhSgDg8g7Qg+g+AAhYQAAhZA+g+IAOgNQgsgQgkgkQg/g/AAhZQAAhaA/hAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA9g8BWAAQAxAAAoATQAOgsAjgkQA7g6BSAAQBTAAA6A6IAQASQANgsAjgkQA5g4BPAAQBQAAA4A4QA5A5AABQIAAAGQAYgEAaABQBkAABHAzQBHA1AABJIgBARQBNAGA5A4QA+A+AABYQAAA+gfAxIAagBQBhAABEAvQBEAxAABEQAABFhEAwQhEAxhhAAQhgAAhFgxQhEgwAAhFQAAgiARgdQhSgDg7g7Qg+g9AAhYQAAgbAFgYIgSAAQhkABhHg1QhAgwgGhBIgCAAQhPAAg5g4IgNgPQgOAvglAlQg6A7hTAAQgrAAgkgQQgOAzgoAnQgrAsg4AMQALAhAAAlQAABZhAA/IgRAQQAqAPAiAiQA+A+AABZQAABOgyA6QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhFAAQhGAAgxgxg");
	var mask_graphics_9 = new cjs.Graphics().p("AreK7QgxgxAAhFQAAgzAagnQhSgDg8g7Qg+g+AAhYQAAhZA+g+IAOgNQgsgQgkgkQg/g/AAhZQAAhaA/hAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA9g8BWAAQAxAAAoATQAOgsAjgkQA7g6BSAAQBTAAA6A6IAQASQANgsAjgkQA5g4BQAAQBPAAA4A4QA5A5AABQIAAAGQAYgEAaABQBkAABHAzQBHA1AABJIgBARQBNAGA5A4QA+A+AABYQAAA+gfAxIAagBQBhAABEAvQBEAxAABEQAAAWgGATQA6AKAsAsQA4A3AABQQAABPg4A3Qg3A4hPAAQhPAAg4g4Qg4g3AAhPQAAgjALgdIgPAAQhgAAhFgxQhEgwAAhFQAAgiARgdQhSgDg7g7Qg+g9AAhYQAAgbAFgYIgSAAQhkABhHg1Qg/gwgGhBIgCAAQhQAAg5g4IgNgPQgOAvglAlQg6A7hTAAQgrAAgkgQQgOAzgoAnQgrAsg4AMQALAhAAAlQAABZhAA/IgRAQQAqAPAiAiQA+A+AABZQAABOgyA6QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhFAAQhGAAgxgxg");
	var mask_graphics_10 = new cjs.Graphics().p("AMTLeQg7g6AAhTQAAgxAVgoIgIAAQhPAAg4g4Qg4g3AAhPQAAgiAKgeIgOAAQhgAAhFgwQhEgxAAhEQAAgjARgdQhSgDg7g6Qg+g+AAhYQAAgaAFgZIgSABQhkAAhGg1QhAgvgGhCIgCAAQhQAAg5g4IgNgPQgOAvglAmQg6A6hTAAQgrAAgkgQQgOAzgoAoQgrArg4ANQALAgAAAlQAABahAA/IgRAPQAqAPAiAiQA+A/AABYQAABPgyA5QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhFAAQhGAAgxgxQgxgxAAhFQAAgyAagoQhSgDg8g7Qg+g+AAhYQAAhYA+g/IAOgNQgsgPgkgkQg/g/AAhaQAAhaA/hAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA9g8BWAAQAxAAAoATQAOgsAjgkQA7g6BSAAQBTAAA6A6IAQASQANgsAjgjQA5g5BQAAQBQAAA3A5QA5A4AABQIAAAGQAYgDAaAAQBkAABHA0QBHA0AABKIgBARQBNAFA5A4QA+A+AABYQAAA+gfAxIAagBQBhAABEAxQBEAvAABFQAAAVgGAUQA6AJAsAsQA4A4AABPQAAAsgRAkIAOAAQBSAAA7A6QA6A7AABSQAABTg6A6Qg7A7hSAAQhTAAg6g7g");
	var mask_graphics_11 = new cjs.Graphics().p("ANnNiQg+g+AAhYQAAgfAIgcQhPgBg5g5Qg6g6AAhTQgBgxAVgoIgIAAQhPAAg4g4Qg3g3gBhPQABgjAKgdIgOAAQhhAAhFgxQhEgwABhEQgBgiASgdQhTgDg7g7Qg+g+AAhYQAAgbAGgYIgSAAQhkABhGg1QhBgwgFhBIgDAAQhQAAg5g4IgNgPQgNAvgmAlQg6A7hSAAQgrAAglgQQgOAzgnAnQgsAsg4AMQALAhAAAlQAABahAA/IgRAQQAqAPAiAiQA/A9gBBZQAABOgyA6QAzAJAnAmQAwAxAABGQAABFgwAxQgyAxhFAAQhFAAgygxQgwgxAAhFQgBgzAagnQhSgDg8g7Qg9g+gBhYQABhZA9g9IAPgNQgtgQgjgkQhAg/AAhaQAAhaBAhAQAxgxBAgLQgHgbAAgfQgBhWA9g9QA9g8BWAAQAxAAApATQANgsAkgkQA6g6BTAAQBSAAA6A6IAQASQANgsAjgkQA5g4BQAAQBQAAA5A4QA4A5AABQIAAAGQAYgEAaABQBjAABHAzQBHA1AABJIgBARQBOAGA4A4QA+A+AABYQAAA+gfAxIAbgBQBgAABEAwQBFAxAABEQAAAWgHATQA7AJArAsQA4A3AABQQABArgSAlIAOAAQBTgBA6A7QA7A6gBBTQAAAYgEAWIAEAAQBYAAA+A+QA+A+AABYQAABYg+A+Qg+A+hYAAQhYAAg+g+g");
	var mask_graphics_12 = new cjs.Graphics().p("AP+PRQg0g0AAhJQAAgQADgOQgWAEgXAAQhYAAg+g+Qg+g+AAhYQAAgfAHgbQhPgCg4g5Qg7g6AAhTQAAgxAVgoIgIAAQhPAAg4g4Qg4g3AAhPQAAgiAKgeIgOAAQhgAAhFgvQhEgxAAhEQAAgjARgdQhSgDg6g7Qg+g+AAhYQAAgaAFgZIgSABQhkAAhHg1QhAgvgGhCIgCAAQhQAAg5g4IgNgPQgOAvglAmQg6A6hTAAQgrAAgkgQQgOAzgoAoQgrArg4ANQALAgAAAlQAABahABAIgRAPQAqAPAiAiQA+A/AABYQAABOgyA5QAzAJAmAmQAxAxAABGQAABFgxAxQgxAxhFAAQhGAAgxgxQgxgxAAhFQAAgyAagoQhSgDg8g7Qg+g+AAhXQAAhYA+g/IAOgNQgsgPgkgkQg/hAAAhaQAAhaA/hAQAxgxBBgLQgIgbAAgfQAAhWA9g9QA9g8BWAAQAxAAAoATQAOgsAjgkQA7g6BSAAQBTAAA6A6IAQASQANgsAjgjQA5g5BQAAQBQAAA4A5QA5A4AABQIAAAGQAYgDAaAAQBjAABHA0QBHA0AABKIgBARQBNAFA5A4QA+A+AABYQAAA+gfAxIAagBQBhAABEAxQBEAwAABFQAAAVgGAUQA6AJAsAsQA4A4AABOQAAAsgRAkIAOAAQBSAAA7A6QA6A7AABSQAAAYgFAWIAFAAQBYAAA+A+QA+A+AABYQAAAggIAdIAQgBQBKAAA0A0QA0A0AABKQAABJg0A0Qg0A1hKAAQhJAAg1g1g");
	var mask_graphics_13 = new cjs.Graphics().p("ARbQnQg2g1gEhLQgQAEgRAAQhKgBg0g0Qg0g0AAhJQgBgQADgOQgWAEgXAAQhYAAg+g+Qg+g+AAhYQAAgfAIgcQhPgBg5g5Qg6g6AAhTQgBgxAVgoIgIAAQhPAAg4g4Qg3g3gBhOQABgjAKgdIgOAAQhhAAhFgxQhDgwABhFQgBgiARgdQhSgDg7g7Qg+g+AAhYQAAgbAGgYIgSAAQhlABhGg1QhBgwgFhBIgDAAQhQAAg5g4IgNgPQgNAvgmAlQg6A7hSAAQgrAAglgQQgOAzgnAnQgsAsg4AMQALAhAAAlQAABahAA/IgRAQQAqAPAiAiQA/A+gBBZQAABOgyA5QAzAJAnAmQAwAxAABGQAABFgwAxQgyAxhFAAQhFAAgygxQgwgxAAhFQgBgzAagnQhSgDg8g7Qg9g9gBhYQABhZA9g+IAPgNQgtgQgjgkQhAg/AAhaQAAhaBAhAQAxgxBAgLQgHgbAAgfQgBhWA9g9QA9g8BWAAQAxAAApATQANgsAkgkQA6g6BTAAQBSAAA6A6IAQASQANgsAjgkQA5g4BQAAQBQAAA5A4QA4A5AABQIAAAGQAYgEAbABQBjAABHAzQBGA1AABJIgBARQBOAGA4A4QA+A+AABYQAAA+gfAxIAbgBQBgAABEAwQBFAxAABEQAAAWgHATQA7AKArAsQA4A3AABQQABAqgSAlIAOAAQBTgBA6A7QA7A6gBBTQAAAYgEAWIAEAAQBYAAA+A+QA+A+AABYQAAAggIAcIARgBQBJAAA0A0QArArAIA5QAZgHAdAAQBSAAA5A6QA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	var mask_graphics_14 = new cjs.Graphics().p("ATNSiQg2g2AAhNQAAgcAIgaIgWACQhSgBg6g6Qg1g1gEhKQgQADgSAAQhKAAg0g1Qg0gzAAhKQAAgPACgPQgVAFgXAAQhYgBg/g9Qg+g+AAhZQAAgeAIgcQhPgCg4g5Qg7g6AAhTQAAgwAVgpIgIABQhQgBg3g4Qg4g2AAhPQAAgiAKgeIgOAAQhgAAhEgwQhEgwAAhFQAAgiARgeQhSgCg8g7Qg9g/AAhYQAAgaAFgYIgSAAQhkAAhHg0QhAgwgGhCIgDAAQhPAAg5g4IgOgPQgNAwglAlQg7A7hSgBQgrAAgkgPQgOAygoAoQgrAsg4AMQAKAhABAlQAABZhBBAIgQAPQAqAQAhAiQA/A+AABYQAABPgyA6QAzAIAmAnQAxAvAABGQAABGgxAwQgxAyhGAAQhFAAgxgyQgxgwAAhGQAAgyAZgnQhSgDg7g7Qg+g+AAhYQAAhYA+g+IAOgNQgsgQgkgkQhAhAAAhZQAAhbBAhAQAxgwBBgLQgIgcAAgfQAAhVA9g+QA8g8BWAAQAxAAApATQAOgsAjgjQA6g7BTAAQBSAAA7A7IAQASQANgtAjgjQA5g5BPAAQBRAAA4A5QA5A4AABRIAAAGQAYgEAaAAQBkAABGA0QBHA0AABKIAAARQBMAFA5A5QA9A9ABBYQAAA+gfAyIAagBQBgAABEAwQBFAwAABFQAAAVgHAUQA7AJAsAsQA4A4AABPQAAAsgRAkIAOAAQBSAAA6A6QA7A6AABSQAAAZgFAWIAFAAQBYAAA9A9QA/A/gBBXQABAggJAdIARgBQBJAAA0A0QArArAIA5QAagIAdABQBRgBA5A6QA7A6AABSQAAAigLAfIANAAQBMAAA2A2QA2A1AABNQAABNg2A2Qg2A2hMAAQhMAAg3g2g");
	var mask_graphics_15 = new cjs.Graphics().p("ARWSiQg2g2AAhNQAAgcAIgaIgWACQhSgBg6g6Qg1g1gEhKQgQADgSAAQhKAAg0g1Qg0gzAAhKQAAgPACgPQgVAFgXAAQhYgBg/g9Qg+g+AAhZQAAgeAIgcQhPgCg4g5Qg7g6AAhTQAAgwAVgpIgIABQhQgBg3g4Qg4g2AAhPQAAgiAKgeIgOAAQhfAAhFgwQhEgwAAhFQAAgiARgeQhSgCg8g7Qg9g/AAhYQAAgaAFgYIgSAAQhkAAhHg0QhAgwgGhCIgDAAQhPAAg5g4IgOgPQgNAwglAlQg7A7hSgBQgrAAgkgPQgOAygoAoQgrAsg4AMQAKAhABAlQAABZhBBAIgQAPQAqAQAhAiQA/A+AABYQAABPgyA6QAzAIAmAnQAxAvAABGQAABGgxAwQgxAyhGAAQhFAAgxgyQgxgwAAhGQAAgyAZgnQhSgDg7g7Qg+g+AAhYQAAhYA+g+IAOgNQgsgQgkgkQhAhAAAhZQAAhbBAhAQAxgwBBgLQgIgcAAgfQAAhVA9g+QA8g8BWAAQAxAAApATQAOgsAjgjQA6g7BTAAQBSAAA7A7IAQASQANgtAjgjQA5g5BPAAQBRAAA4A5QA5A4AABRIAAAGQAYgEAaAAQBkAABGA0QBHA0AABKIAAARQBNAFA5A5QA8A9ABBYQAAA+geAyIAZgBQBgAABEAwQBFAwAABFQAAAVgHAUQA7AJAsAsQA4A4AABPQAAAsgRAkIAOAAQBSAAA6A6QA7A6AABSQAAAZgFAWIAFAAQBYAAA9A9QA/A/gBBXQABAggJAdIARgBQBJAAA0A0QArArAIA5QAagIAdABQBRgBA5A6QA7A6AABSQAAAigLAfIANAAQBMAAA2A2QALAKAJAMQAvguBBAAQBDAAAvAuQAuAwABBCQgBBCguAvQgvAvhDAAQhCAAgvgvIgEgEIgPAQQg2A2hMAAQhMAAg3g2g");
	var mask_graphics_16 = new cjs.Graphics().p("AQASiQg2g2AAhNQAAgcAIgaIgXACQhRgBg6g6Qg2g1gEhKQgQADgRAAQhKAAg0g1Qg0gzAAhKQgBgPADgPQgWAFgXAAQhYgBg+g9Qg+g+AAhZQAAgeAIgcQhPgCg5g5Qg6g6AAhTQgBgwAVgpIgIABQhPgBg3g4Qg3g2gBhPQABgiAKgeIgOAAQhhAAhFgwQhEgwABhFQgBgiASgeQhTgCg7g7Qg+g/AAhYQAAgaAGgYIgSAAQhlAAhGg0QhBgwgFhCIgDAAQhQAAg5g4IgNgPQgNAwgmAlQg6A7hSgBQgrAAglgPQgOAygnAoQgsAsg4AMQALAhAAAlQAABZhABAIgRAPQAqAQAiAiQA/A+gBBYQAABPgyA6QAzAIAnAnQAwAvAABGQAABGgwAwQgyAyhFAAQhFAAgygyQgwgwAAhGQgBgyAagnQhSgDg8g7Qg9g+gBhYQABhYA9g+IAPgNQgtgQgjgkQhAhAAAhZQAAhbBAhAQAxgwBAgLQgHgcAAgfQgBhVA9g+QA9g8BWAAQAxAAApATQANgsAkgjQA6g7BTAAQBSAAA6A7IAQASQANgtAjgjQA5g5BQAAQBQAAA5A5QA4A4AABRIAAAGQAYgEAbAAQBjAABHA0QBHA0AABKIgBARQBOAFA4A5QA+A9AABYQAAA+gfAyIAbgBQBfAABEAwQBFAwAABFQAAAVgHAUQA7AJArAsQA4A4AABPQABAsgSAkIAOAAQBTAAA6A6QA7A6gBBSQAAAZgEAWIAEAAQBYAAA+A9QA+A/AABXQAAAggIAdIARgBQBJAAA0A0QArArAIA5QAZgIAdABQBSgBA5A6QA6A6AABSQAAAigLAfIANAAQBNAAA2A2QALAKAIAMQAmglAzgHQgIgZAAgcQAAhMA1g2QA2g1BLAAQBMAAA2A1QA1A2AABMQAABLg1A2QgzAyhIADQADAOAAAPQAABCgvAvQgvAvhCAAQhDAAgvgvIgEgEIgOAQQg2A2hNAAQhMAAg2g2g");
	var mask_graphics_17 = new cjs.Graphics().p("AQASiQg2g2AAhNQAAgcAIgaIgXACQhRgBg6g6Qg2g1gEhKQgQADgRAAQhKAAg0g1Qg0gzAAhKQgBgPADgPQgWAFgXAAQhYgBg+g9Qg+g+AAhZQAAgeAIgcQhPgCg5g5Qg6g6AAhTQgBgwAVgpIgIABQhPgBg3g4Qg3g2gBhPQABgiAKgeIgOAAQhhAAhFgwQhEgwABhFQgBgiASgeQhTgCg7g7Qg+g/AAhYQAAgaAGgYIgSAAQhlAAhGg0QhBgwgFhCIgDAAQhQAAg5g4IgNgPQgNAwgmAlQg6A7hSgBQgrAAglgPQgOAygnAoQgsAsg4AMQALAhAAAlQAABZhABAIgRAPQAqAQAiAiQA/A+gBBYQAABPgyA6QAzAIAnAnQAwAvAABGQAABGgwAwQgyAyhFAAQhFAAgygyQgwgwAAhGQgBgyAagnQhSgDg8g7Qg9g+gBhYQABhYA9g+IAPgNQgtgQgjgkQhAhAAAhZQAAhbBAhAQAxgwBAgLQgHgcAAgfQgBhVA9g+QA9g8BWAAQAxAAApATQANgsAkgjQA6g7BTAAQBSAAA6A7IAQASQANgtAjgjQA5g5BQAAQBQAAA5A5QA4A4AABRIAAAGQAYgEAbAAQBjAABHA0QBHA0AABKIgBARQBOAFA4A5QA+A9AABYQAAA+gfAyIAbgBQBfAABEAwQBFAwAABFQAAAVgHAUQA7AJArAsQA4A4AABPQABAsgSAkIAOAAQBTAAA6A6QA7A6gBBSQAAAZgEAWIAEAAQBYAAA+A9QA+A/AABXQAAAggIAdIARgBQBJAAA0A0QArArAIA5QAZgIAdABQBSgBA5A6QA6A6AABSQAAAigLAfIANAAQBNAAA2A2QALAKAIAMQAmglAzgHQgIgZAAgcQAAgoAPgiQgNgJgMgMQgxgwAAhFQAAhFAxgwQAwgwBFAAQBEAAAxAwQAwAwAABFQAAAagHAWQAZANAWAVQA1A2AABMQAABLg1A2QgzAyhIADQADAOAAAPQAABCgvAvQgvAvhCAAQhDAAgvgvIgEgEIgOAQQg2A2hNAAQhMAAg2g2g");
	var mask_graphics_18 = new cjs.Graphics().p("AQASiQg2g2AAhNQAAgcAIgaIgXACQhRgBg6g6Qg2g1gEhKQgQADgRAAQhKAAg0g1Qg0gzAAhKQgBgPADgPQgWAFgXAAQhYgBg+g9Qg+g+AAhZQAAgeAIgcQhPgCg5g5Qg6g6AAhTQgBgwAVgpIgIABQhPgBg3g4Qg3g2gBhPQABgiAKgeIgOAAQhhAAhFgwQhEgwABhFQgBgiASgeQhTgCg7g7Qg+g/AAhYQAAgaAGgYIgSAAQhlAAhGg0QhBgwgFhCIgDAAQhQAAg5g4IgNgPQgNAwgmAlQg6A7hSgBQgrAAglgPQgOAygnAoQgsAsg4AMQALAhAAAlQAABZhABAIgRAPQAqAQAiAiQA/A+gBBYQAABPgyA6QAzAIAnAnQAwAvAABGQAABGgwAwQgyAyhFAAQhFAAgygyQgwgwAAhGQgBgyAagnQhSgDg8g7Qg9g+gBhYQABhYA9g+IAPgNQgtgQgjgkQhAhAAAhZQAAhbBAhAQAxgwBAgLQgHgcAAgfQgBhVA9g+QA9g8BWAAQAxAAApATQANgsAkgjQA6g7BTAAQBSAAA6A7IAQASQANgtAjgjQA5g5BQAAQBQAAA5A5QA4A4AABRIAAAGQAYgEAbAAQBjAABHA0QBHA0AABKIgBARQBOAFA4A5QA+A9AABYQAAA+gfAyIAbgBQBfAABEAwQBFAwAABFQAAAVgHAUQA7AJArAsQA4A4AABPQABAsgSAkIAOAAQBTAAA6A6QA7A6gBBSQAAAZgEAWIAEAAQBYAAA+A9QA+A/AABXQAAAggIAdIARgBQBJAAA0A0QArArAIA5QAZgIAdABQBSgBA5A6QA6A6AABSQAAAigLAfIANAAQBNAAA2A2QALAKAIAMQAmglAzgHQgIgZAAgcQAAgoAPgiQgNgJgMgMQgxgwAAhFQAAgZAGgWQg3gFgogoQgvgvAAhBQAAhAAvgvQAtgtBCAAQBBAAAtAtQAvAvgBBAQAAAVgEASQA/ADAuAtQAwAwAABFQAAAagHAWQAZANAWAVQA1A2AABMQAABLg1A2QgzAyhIADQADAOAAAPQAABCgvAvQgvAvhCAAQhDAAgvgvIgEgEIgOAQQg2A2hNAAQhMAAg2g2g");
	var mask_graphics_19 = new cjs.Graphics().p("AQASiQg2g2AAhNQAAgcAIgaIgXACQhRgBg6g6Qg2g1gEhKQgQADgRAAQhKAAg0g1Qg0gzAAhKQgBgPADgPQgWAFgXAAQhYgBg+g9Qg+g+AAhZQAAgeAIgcQhPgCg5g5Qg6g6AAhTQgBgwAVgpIgIABQhPgBg3g4Qg3g2gBhPQABgiAKgeIgOAAQhhAAhFgwQhEgwABhFQgBgiASgeQhTgCg7g7Qg+g/AAhYQAAgaAGgYIgSAAQhlAAhGg0QhBgwgFhCIgDAAQhQAAg5g4IgNgPQgNAwgmAlQg6A7hSgBQgrAAglgPQgOAygnAoQgsAsg4AMQALAhAAAlQAABZhABAIgRAPQAqAQAiAiQA/A+gBBYQAABPgyA6QAzAIAnAnQAwAvAABGQAABGgwAwQgyAyhFAAQhFAAgygyQgwgwAAhGQgBgyAagnQhSgDg8g7Qg9g+gBhYQABhYA9g+IAPgNQgtgQgjgkQhAhAAAhZQAAhbBAhAQAxgwBAgLQgHgcAAgfQgBhVA9g+QA9g8BWAAQAxAAApATQANgsAkgjQA6g7BTAAQBSAAA6A7IAQASQANgtAjgjQA5g5BQAAQBQAAA5A5QA4A4AABRIAAAGQAYgEAbAAQBjAABHA0QBHA0AABKIgBARQBOAFA4A5QA+A9AABYQAAA+gfAyIAbgBQBfAABEAwQBFAwAABFQAAAVgHAUQA7AJArAsQA4A4AABPQABAsgSAkIAOAAQBTAAA6A6QA7A6gBBSQAAAZgEAWIAEAAQBYAAA+A9QA+A/AABXQAAAggIAdIARgBQBJAAA0A0QArArAIA5QAZgIAdABQBSgBA5A6QA6A6AABSQAAAigLAfIANAAQBNAAA2A2QALAKAIAMQAmglAzgHQgIgZAAgcQAAgoAPgiQgNgJgMgMQgxgwAAhFQAAgZAGgWQg3gFgogoQgvgvAAhBIABgQQgSAEgVAAQhBAAgtguQgvguABhBQgBhBAvguQAtguBBAAQBBAAAvAuQAuAuAABBIgBARQASgEAVAAQBBAAAtAtQAvAvgBBAQAAAVgEASQA/ADAuAtQAwAwAABFQAAAagHAWQAZANAWAVQA1A2AABMQAABLg1A2QgzAyhIADQADAOAAAPQAABCgvAvQgvAvhCAAQhDAAgvgvIgEgEIgOAQQg2A2hNAAQhMAAg2g2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:89.65,y:205.7}).wait(1).to({graphics:mask_graphics_1,x:80.75,y:188.35}).wait(1).to({graphics:mask_graphics_2,x:77.375,y:169.675}).wait(1).to({graphics:mask_graphics_3,x:77.575,y:156.575}).wait(1).to({graphics:mask_graphics_4,x:91.125,y:150.65}).wait(1).to({graphics:mask_graphics_5,x:107.9,y:147.65}).wait(1).to({graphics:mask_graphics_6,x:122.5,y:147.65}).wait(1).to({graphics:mask_graphics_7,x:132.25,y:147.65}).wait(1).to({graphics:mask_graphics_8,x:143.675,y:147.65}).wait(1).to({graphics:mask_graphics_9,x:151.275,y:147.65}).wait(1).to({graphics:mask_graphics_10,x:161.075,y:152.125}).wait(1).to({graphics:mask_graphics_11,x:171.65,y:165.65}).wait(1).to({graphics:mask_graphics_12,x:180.975,y:175.825}).wait(1).to({graphics:mask_graphics_13,x:193.45,y:184.95}).wait(1).to({graphics:mask_graphics_14,x:202.8,y:196.8}).wait(1).to({graphics:mask_graphics_15,x:214.7,y:196.8}).wait(1).to({graphics:mask_graphics_16,x:223.35,y:196.8}).wait(1).to({graphics:mask_graphics_17,x:223.35,y:196.8}).wait(1).to({graphics:mask_graphics_18,x:223.35,y:196.8}).wait(1).to({graphics:mask_graphics_19,x:223.35,y:196.8}).wait(121));

	// lady01
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

	// pen02
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(381.3,276.8,1,1,0,0,0,-104,-77.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({x:398.35,y:286.6},0).wait(1).to({x:413.35,y:296.65},0).wait(1).to({x:432.35,y:307.95},0).wait(1).to({x:442.35},0).wait(1).to({x:452.35,y:291.95},0).wait(1).to({y:268.95},0).wait(1).to({y:253.95},0).wait(1).to({y:232.95},0).wait(1).to({x:453.1,y:219.35},0).wait(1).to({x:440.1,y:203.35},0).wait(1).to({x:422.1,y:191.35},0).wait(1).to({x:400.1,y:186.35},0).wait(1).to({x:381.25,y:180.2},0).wait(1).to({x:365.4,y:178.95},0).wait(1).to({x:347.4,y:191.95},0).wait(1).to({x:335.4,y:199.95},0).wait(1).to({x:321.75,y:207.15},0).to({_off:true},1).wait(102));

	// 遮色片02 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("AgMBxQglgFgZgXQgRgPgLgVQgKgVgBgWQgBgWAIgVQAIgWAPgRQAVgWAegJQAegJAcAGQAiAIAYAbQAZAbAEAjQAEAhgQAgQgRAhgfAQQgYANgcAAIgNgBg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ABICjQglgFgagXQgQgPgKgVQgKgVgBgWIAAgHIgDACQgeAQgkgEQglgFgZgXQgRgPgLgUQgKgVgBgWQgBgXAIgVQAIgWAPgRQAVgWAegJQAegJAdAGQAiAIAYAbQAYAbAEAjIABAPQAKgGANgDQAegKAdAHQAiAIAYAbQAZAaAEAiQAEAjgQAgQgRAhgfAQQgYANgcAAIgOgBg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ACJDQQglgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQgjgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagWQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgGAMgDQAdgKAeAHQAhAIAZAbQAVAYAGAdQAWgDAWAFQAhAIAZAaQAYAbAFAiQAEAigRAhQgQAhgfAQQgYANgcAAIgOgBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ADdD8QgkgEgagXQgRgPgKgVQgJgTgCgVIgDACQgeAQgkgEQglgFgZgXQgRgPgKgVQgGgNgDgOQgPADgQgCQgkgFgagXQgRgPgKgVQgKgUgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgFAMgEQAegKAeAHQAhAIAYAbQAVAYAGAeQAWgEAWAFQAhAIAZAbQAYAaAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbQAYAbAFAiQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AEZEVQgkgEgagXQgMgLgJgNQgRAEgUgDQgkgEgagXQgRgPgKgVQgJgTgCgVIgDACQgeAQgjgEQglgFgagXQgRgPgKgVQgGgNgDgOQgPADgQgCQgkgFgagXQgRgPgKgUQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgFAMgEQAegKAeAHQAhAIAZAbQAVAYAGAeQAVgEAWAFQAhAIAZAbQAYAbAFAhIAAAGQALgGANgEQAegIAdAGQAiAIAYAbIALAPQAagGAZAGQAiAIAYAbQAYAbAFAiQAEAjgRAgQgRAhgeAQQgYAMgcAAIgPgBg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AD2EVQgkgEgagXQgMgLgJgNQgRAEgUgDQgkgEgagXQgRgPgKgVQgJgTgCgVIgDACQgdAQgkgEQglgFgagXQgRgPgKgVQgGgNgDgOQgPADgQgCQgkgFgagXQgRgPgKgUQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgFAMgEQAegKAeAHQAhAIAZAbQAVAYAGAeQAWgEAWAFQAgAIAZAbQAYAbAFAhIAAAGQALgGANgEQAegIAdAGQAiAIAYAbIABACQgIgTgBgWQgBgVAIgWQAHgWAQgQQAUgWAegKQAfgJAdAHQAhAIAZAbQAYAbAFAiQAEAigRAgQgRAggeAQQgNAHgOAEQANAUAEAYQAEAjgRAgQgRAhgeAQQgYAMgcAAIgPgBg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ADsElQgkgFgagXQgMgKgJgOQgRAEgUgCQgkgFgagXQgRgPgKgVQgJgTgCgUIgDABQgdAQgkgEQglgEgagXQgRgPgKgVQgGgOgDgNQgPACgQgCQgkgEgagXQgRgPgKgVQgKgUgBgXIAAgGIgDABQgfAQgkgEQgkgEgagXQgRgPgKgVQgKgVgBgXQgBgWAIgWQAHgWAQgQQAUgWAegKQAegJAdAHQAiAIAZAbQAYAbAEAiIABAQQALgGAMgEQAegJAeAHQAhAIAZAbQAVAYAGAdQAWgEAWAFQAgAIAZAbQAYAcAFAhIAAAFQALgGANgDQAegJAdAGQAiAJAYAbIABABQgIgTgBgVQgBgWAIgVQAHgWAQgRQAOgPASgJIgEgDQgkgggCgwQgBgXAIgVQAHgWAQgRQAUgWAegJQAfgJAdAGQAhAIAZAbQAYAcAFAiQAEAigRAgQgRAhgeAQIgCABIANAMQAYAcAFAiQAEAhgRAgQgRAhgeAQQgNAHgOADQANAUAEAZQAEAigRAhQgRAggeAQQgYANgcAAIgPgBg");
	var mask_1_graphics_27 = new cjs.Graphics().p("ADYF/QgkgFgagXQgMgKgJgOQgRAEgUgCQgkgFgagXQgRgPgKgVQgIgTgCgUIgDABQgeAQgkgEQglgEgagXQgRgPgKgVQgGgOgDgNQgPACgQgCQgkgEgagXQgRgPgKgVQgKgVgBgXIAAgGIgDABQgfAQgkgEQgkgEgagXQgRgPgKgUQgKgVgBgXQgBgWAIgWQAHgWAQgQQAUgWAegKQAegJAdAHQAiAIAZAbQAYAbAEAiIABAQQALgGAMgEQAegJAeAHQAhAIAZAbQAVAYAGAcQAWgEAWAFQAhAIAYAbQAYAcAFAiIAAAFQALgGANgDQAegJAdAGQAiAJAYAbIABABQgIgTgBgVQgBgXAIgVQAHgWAQgRQAOgPASgIIgEgDQgkgggCgwQgBgXAIgVQAHgWAQgRQAQgRAWgKQgagdgCgpQgBgXAIgVQAHgWAQgRQAUgWAegJQAfgJAdAGQAhAIAZAbQAYAcAFAiQAEAigRAgQgRAhgeAQIgJAEQAYAbAFAiQAEAigRAgQgRAhgeAPIgCABIANAMQAYAcAFAiQAEAigRAgQgRAhgeAQQgNAHgOADQANAUAEAZQAEAigRAhQgRAggeAQQgYANgcAAIgPgBg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ADXHhQgkgFgagXQgLgKgJgNQgSADgTgCQglgFgagXQgRgPgKgVQgIgTgBgUIgDABQgfAQgkgEQgkgEgagXQgRgPgKgVQgGgNgDgOQgPACgQgCQglgEgagXQgRgPgKgVQgKgVgBgXIAAgGIgDABQgeAQgkgEQglgEgZgXQgRgPgLgVQgKgVgBgXQgBgWAIgWQAIgVAPgQQAVgWAegKQAegJAdAHQAiAIAYAbQAZAbAEAhIABAQQALgGAMgEQAegJAdAHQAiAIAYAbQAWAYAGAdQAWgDAVAEQAiAIAXAbQAZAcAEAiIABAGQALgGAMgEQAegJAdAGQAiAJAYAbIACABQgIgSgCgWQgBgXAIgVQAIgWAPgRQAOgPATgJIgEgDQgkgggDgwQgBgWAIgVQAIgWAPgRQARgRAWgKQgagdgDgpQgBgXAIgVQAIgWAPgRQAMgNAQgIQgKgGgIgHQgbgXgIglQgIgkANghQALgaAXgTQAYgSAcgFQAcgFAcAKQAcAJATAWQAWAXAGAgQAGAjgQAiQgPAhgeARQAOAJAMANQAZAcAEAiQAEAigQAgQgRAhgfAQIgIAEQAYAbAEAiQAEAhgQAgQgRAhgfAQIgCABIANAMQAZAcAEAiQAEAigQAgQgRAhgfAQQgMAHgOADQANAVADAYQAEAigQAhQgRAggfAQQgXANgcAAIgQgBg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ADXI4QgkgFgagXQgLgKgJgOQgSAEgTgCQglgFgagXQgRgPgKgVQgIgTgBgUIgDABQgfAQgkgEQgkgEgagXQgRgPgKgVQgGgOgDgNQgPACgQgCQglgEgagXQgRgPgKgVQgKgVgBgXIAAgGIgDABQgeAQgkgEQglgEgZgXQgRgPgLgVQgKgVgBgXQgBgWAIgWQAIgWAPgQQAVgWAegKQAegJAdAHQAiAIAYAbQAZAbAEAiIABAQQALgGAMgEQAegJAdAHQAiAIAYAbQAWAYAGAdQAWgEAVAFQAiAIAXAbQAZAcAEAiIABAFQALgGAMgDQAegJAdAGQAiAJAYAbIACABQgIgTgCgVQgBgXAIgVQAIgWAPgRQAOgPATgJIgEgDQgkgggDgwQgBgXAIgVQAIgWAPgRQARgRAWgJQgagdgDgpQgBgXAIgVQAIgWAPgRQAMgNAQgIQgKgGgIgHQgbgXgIglQgIgkANghQAGgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgWQgBgXAIgWQAIgVAQgRQAUgWAegJQAegJAdAGQAiAJAYAbQAZAbAEAiQAEAigQAhQgFAKgHAIQAVAJAPASQAWAXAGAgQAGAjgQAiQgPAhgeARQAOAJAMANQAZAcAEAiQAEAigQAgQgRAggfAQIgIAEQAYAbAEAiQAEAigQAgQgRAhgfAQIgCABIANAMQAZAcAEAiQAEAigQAgQgRAhgfAQQgMAHgOADQANAUADAZQAEAigQAhQgRAggfAQQgXANgcAAIgQgBg");
	var mask_1_graphics_30 = new cjs.Graphics().p("ADXKIQgkgEgagXQgLgLgJgNQgSADgTgCQglgEgagXQgRgPgKgVQgIgUgBgUIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQglgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgeAQgkgEQglgFgZgXQgRgPgLgVQgKgVgBgWQgBgXAIgVQAIgWAPgRQAVgWAegJQAegJAdAGQAiAIAYAbQAZAbAEAjIABAPQALgGAMgDQAegKAdAHQAiAIAYAbQAWAYAGAdQAWgDAVAFQAiAIAXAbQAZAbAEAiIABAGQALgGAMgEQAegJAdAHQAiAIAYAbIACABQgIgSgCgWQgBgWAIgWQAIgWAPgQQAOgPATgKIgEgDQgkgggDgwQgBgWAIgWQAIgWAPgQQARgSAWgKQgagdgDgpQgBgVAIgWQAIgWAPgQQAMgNAQgJQgKgFgIgIQgbgXgIgkQgIgkANghQAGgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQAAgRAEgQQgKAAgKgBQgngGgcgZQgbgagJgnQgIgnAOgiQAPgjAhgWQAhgVAmABQAsABAjAhQAjAhAFAsQADAZgIAZQAKAAAKADQAiAIAYAbQAZAbAEAiQAEAjgQAgQgFAKgHAIQAVAKAPARQAWAYAGAgQAGAigQAiQgPAhgeASQAOAIAMAOQAZAbAEAiQAEAigQAgQgRAggfAQIgIAEQAYAbAEAiQAEAjgQAgQgRAggfAQIgCABIANANQAZAbAEAiQAEAjgQAgQgRAggfAQQgMAHgOADQANAVADAYQAEAjgQAgQgRAhgfAQQgXAMgcAAIgQgBg");
	var mask_1_graphics_31 = new cjs.Graphics().p("ADXKwQgkgEgagXQgLgLgJgNQgSADgTgCQglgEgagXQgRgPgKgVQgIgUgBgUIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQglgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgeAQgkgEQglgFgZgXQgRgPgLgVQgKgVgBgWQgBgXAIgVQAIgWAPgRQAVgWAegJQAegJAdAGQAiAIAYAbQAZAbAEAjIABAPQALgGAMgDQAegKAdAHQAiAIAYAbQAWAYAGAdQAWgDAVAFQAiAIAXAbQAZAbAEAiIABAGQALgGAMgEQAegJAdAHQAiAIAYAbIACABQgIgSgCgWQgBgWAIgWQAIgWAPgQQAOgPATgKIgEgDQgkgggDgwQgBgWAIgWQAIgWAPgQQARgSAWgKQgagdgDgpQgBgWAIgVQAIgWAPgQQAMgNAQgJQgKgFgIgIQgbgXgIgkQgIgkANghQAGgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQAAgRAEgQQgKAAgKgBQgngGgcgZQgbgagJgnIgBgKQgLAIgMAHQgiARgmgGQgngGgcgZQgbgagJgnQgIgnAOgiQAPgjAhgWQAhgVAlABQAsABAjAhQAiAfAFArIALgIQAhgVAmABQAsABAjAhQAjAhAFAsQADAZgIAZQAKAAAKADQAiAIAYAbQAZAbAEAiQAEAjgQAgQgFAKgHAIQAVAKAPARQAWAYAGAgQAGAigQAiQgPAhgeASQAOAIAMAOQAZAbAEAhQAEAjgQAgQgRAggfAQIgIAEQAYAbAEAiQAEAjgQAgQgRAggfAQIgCABIANANQAZAbAEAiQAEAjgQAgQgRAggfAQQgMAHgOADQANAVADAYQAEAjgQAgQgRAhgfAQQgXAMgcAAIgQgBg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ADXLdQgkgEgagXQgLgLgJgNQgSADgTgCQglgEgagXQgRgPgKgVQgIgUgBgUIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQglgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgeAQgkgEQglgFgZgXQgRgPgLgVQgKgVgBgWQgBgXAIgVQAIgWAPgRQAVgWAegJQAegJAdAGQAiAIAYAbQAZAbAEAjIABAPQALgGAMgDQAegKAdAHQAiAIAYAbQAWAYAGAdQAWgDAVAFQAiAIAXAbQAZAbAEAiIABAGQALgGAMgEQAegJAdAHQAiAIAYAbIACABQgIgSgCgWQgBgWAIgWQAIgWAPgQQAOgPATgKIgEgDQgkgggDgwQgBgWAIgWQAIgWAPgQQARgSAWgKQgagdgDgpQgBgWAIgWQAIgWAPgQQAMgMAQgJQgKgFgIgIQgbgXgIgkQgIgkANghQAGgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQAAgRAEgQQgKAAgKgBQgngGgcgZQgbgagJgnIgBgKQgLAIgMAHQgiARgmgGQgngGgcgZQgbgagJgnIgCgMIgMAHQgiARgngGQgngGgcgZQgbgagJgnQgIgnAOgiQAPgjAhgWQAhgVAmABQAsABAjAhQAjAgAFAsQAhgVAlABQAsABAjAhQAiAfAFArIALgIQAhgVAmABQAsABAjAhQAjAhAFAsQADAZgIAZQAKAAAKADQAiAIAYAbQAZAbAEAiQAEAjgQAgQgFAKgHAIQAVAKAPARQAWAYAGAgQAGAigQAiQgPAhgeASQAOAIAMANQAZAbAEAiQAEAjgQAgQgRAggfAQIgIAEQAYAbAEAiQAEAjgQAgQgRAggfAQIgCABIANANQAZAbAEAiQAEAjgQAgQgRAggfAQQgMAHgOADQANAVADAYQAEAjgQAgQgRAhgfAQQgXAMgcAAIgQgBg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ADoL7QgkgEgagXQgMgLgIgNQgSADgUgCQgkgEgagXQgRgPgKgVQgJgUgCgUIgDACQgdAQgkgEQglgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQgkgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgGAMgDQAegKAeAHQAhAIAZAbQAWAYAGAdQAWgDAVAFQAgAIAZAbQAYAbAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbIABABQgIgSgBgWQgBgWAIgWQAHgWAQgQQAOgPASgKIgEgDQgkgggCgwQgBgWAIgWQAHgWAQgQQAQgSAXgKQgbgdgCgpQgBgWAIgWQAHgWAQgQQAMgNAPgJQgJgFgJgHQgagXgJgkQgIgkANghQAHgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQgBgRAEgQQgJAAgKgBQgogGgbgZQgcgagIgnIgCgKQgKAIgNAHQghARgngGQgngGgbgZQgcgagIgnIgCgMIgNAHQghARgngGQgogGgbgZQgZgYgJgiQgMAKgPAIQghARgngGQgogGgbgZQgcgagIgnQgJgnAPgiQAOgjAhgWQAigVAlABQAsABAkAhQAaAZAJAfIAOgKQAigVAlABQAsABAkAhQAjAgAEAsQAigVAkABQAsABAkAhQAhAfAGArIAKgIQAigVAlABQAsABAkAhQAjAhAEAsQADAZgIAZQALAAAKADQAiAIAYAbQAYAbAFAiQAEAjgRAgQgFAKgGAIQAVAKAPARQAVAYAGAgQAHAigQAiQgQAhgeARQAPAIAMAOQAYAbAFAiQAEAjgRAgQgRAggeAQIgJAEQAYAbAFAiQAEAjgRAgQgRAggeAQIgCABIANANQAYAbAFAiQAEAjgRAgQgRAggeAQQgNAHgOADQAOAVADAYQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AFCL7QgkgEgagXQgMgLgIgNQgSADgUgCQgkgEgagXQgRgPgKgVQgJgUgCgUIgDACQgeAQgkgEQgkgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQgkgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgGAMgDQAegKAeAHQAhAIAYAbQAWAYAGAdQAWgDAVAFQAhAIAZAbQAYAbAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbIABABQgIgSgBgWQgBgWAIgWQAHgWAQgQQAOgPASgKIgEgDQgkgggCgwQgBgWAIgWQAHgWAQgQQAQgSAXgKQgbgdgCgpQgBgWAIgWQAHgWAQgQQAMgNAPgJQgJgFgJgHQgagXgJgkQgIgkANghQAHgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQgBgRAEgQQgJAAgKgBQgogGgbgZQgcgagIgnIgCgKQgKAIgNAHQghARgngGQgogGgbgZQgcgagHgnIgCgMIgNAHQghARgngGQgogGgbgZQgZgYgJgiQgMAKgPAIQghARgngGQgigFgZgUQgTAdgeAPQghARgngGQgogGgbgZQgcgagIgnQgJgnAPgiQAOgjAhgWQAigVAlABQAoABAgAaQAOgWAXgPQAigVAlABQAsABAkAhQAaAZAJAfIAOgKQAigVAlABQAsABAjAhQAjAgAEAsQAigVAlABQAsABAkAhQAhAfAGArIAKgIQAigVAlABQAsABAkAhQAjAhAEAsQADAZgIAZQALAAAKADQAiAIAYAbQAYAbAFAiQAEAjgRAgQgFAKgGAIQAVAKAPARQAVAYAGAgQAHAigQAiQgQAhgeARQAPAIAMAOQAYAbAFAiQAEAjgRAgQgRAggeAQIgJAEQAYAbAFAiQAEAjgRAgQgRAggeAQIgCABIANANQAYAbAFAiQAEAjgRAgQgRAggeAQQgNAHgOADQAOAVADAYQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AGNL7QgkgEgagXQgMgLgIgNQgSADgUgCQgkgEgagXQgRgPgKgVQgJgUgCgUIgDACQgeAQgkgEQglgFgagXQgRgPgKgVQgGgNgDgOQgOACgQgBQgkgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQALgGAMgDQAegKAdAHQAhAIAZAbQAWAYAGAdQAWgDAVAFQAhAIAZAbQAYAbAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbIABABQgIgSgBgWQgBgWAIgWQAHgWAQgQQAOgPASgKIgEgDQgkgggCgwQgBgWAIgWQAHgWAQgQQAQgSAXgKQgbgdgCgpQgBgWAIgWQAHgWAQgQQAMgNAPgJQgJgFgJgHQgagXgJgkQgIgkANghQAHgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQgBgRAEgQQgJAAgKgBQgogGgbgZQgcgagIgnIgCgKQgKAIgNAHQghARgngGQgogGgbgZQgcgagIgnIgCgMIgNAHQghARgmgGQgogGgbgZQgZgYgJgiQgMAKgPAIQghARgngGQgigFgZgUQgTAdgeAPQghARgngGIgJgCQgDAZgNAYQgTAjgiARQghARgngGQgogGgbgZQgcgagIgnQgJgnAPgiQAOgjAhgWQAigVAlABQAMAAALADQABgTAIgRQAOgjAhgWQAigVAlABQAoABAgAaQAOgWAXgPQAigVAlABQAsABAkAhQAaAZAJAfIAOgKQAigVAkABQAsABAkAhQAjAgAEAsQAigVAlABQAsABAkAhQAhAfAGArIAKgIQAigVAlABQAsABAkAhQAjAhAEAsQADAZgIAZQALAAAKADQAiAIAYAbQAYAbAFAiQAEAjgRAgQgFAKgGAIQAVAKAPARQAVAYAGAgQAHAigQAiQgQAhgeARQAPAIAMAOQAYAbAFAiQAEAjgRAgQgRAggeAQIgJAEQAYAbAFAiQAEAjgRAgQgRAggeAQIgCABIANANQAYAbAFAiQAEAjgRAgQgRAggeAQQgNAHgOADQAOAVADAYQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AHJL7QgkgEgagXQgMgLgIgNQgSADgUgCQgkgEgagXQgRgPgKgVQgJgUgCgUIgDACQgeAQgkgEQglgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQgkgFgZgXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgfAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAiAIAZAbQAYAbAEAjIABAPQAKgGAMgDQAegKAeAHQAhAIAZAbQAWAYAGAdQAWgDAVAFQAhAIAZAbQAYAbAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbIABABQgIgSgBgWQgBgWAIgWQAHgWAQgQQAOgPASgKIgEgDQgkgggCgwQgBgWAIgWQAHgWAQgQQAQgSAXgKQgbgdgCgpQgBgWAIgWQAHgWAQgQQAMgNAPgJQgJgFgJgHQgagXgJgkQgIgkANghQAHgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQgBgRAEgQQgJAAgKgBQgogGgbgZQgcgagIgnIgCgKQgKAIgNAHQghARgngGQgogGgbgZQgcgagIgnIgCgMIgNAHQghARgngGQgogGgagZQgZgYgJgiQgMAKgPAIQghARgngGQgigFgZgUQgTAdgeAPQghARgngGIgJgCQgDAZgNAYQgTAjgiARQgbAOgggCIgIAQQgTAjgiARQghARgngGQgogGgbgZQgcgagIgnQgJgnAPgiQAOgjAhgWQAigVAlABIACgDQAOgjAhgWQAigVAlABQAMAAALADQABgTAIgRQAOgjAhgWQAigVAlABQAoABAgAaQAOgWAXgPQAigVAlABQAsABAkAhQAaAZAJAfIAOgKQAhgVAlABQAsABAkAhQAjAgAEAsQAigVAlABQAsABAkAhQAhAfAGArIAKgIQAigVAlABQAsABAkAhQAjAhAEAsQADAZgIAZQALAAAKADQAiAIAYAbQAYAbAFAiQAEAjgRAgQgFAKgGAIQAVAKAPARQAVAYAGAgQAHAigQAiQgQAhgeARQAPAIAMAOQAYAbAFAiQAEAjgRAgQgRAggeAQIgJAEQAYAbAFAiQAEAjgRAgQgRAggeAQIgCABIANANQAYAbAFAiQAEAjgRAgQgRAggeAQQgNAHgOADQAOAVADAYQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AIZL7QgkgEgagXQgMgLgIgNQgSADgUgCQgkgEgagXQgRgPgKgVQgJgUgCgUIgDACQgeAQgkgEQglgFgagXQgRgPgKgVQgGgNgDgOQgPACgQgBQgkgFgagXQgRgPgKgVQgKgVgBgWIAAgHIgDACQgeAQgkgEQgkgFgagXQgRgPgKgVQgKgVgBgWQgBgXAIgVQAHgWAQgRQAUgWAegJQAegJAdAGQAhAIAZAbQAYAbAEAjIABAPQALgGAMgDQAegKAeAHQAhAIAZAbQAWAYAGAdQAWgDAVAFQAhAIAZAbQAYAbAFAiIAAAGQALgGANgEQAegJAdAHQAiAIAYAbIABABQgIgSgBgWQgBgWAIgWQAHgWAQgQQAOgPASgKIgEgDQgkgggCgwQgBgWAIgWQAHgWAQgQQAQgSAXgKQgbgdgCgpQgBgWAIgWQAHgWAQgQQAMgNAPgJQgJgFgJgHQgagXgJgkQgIgkANghQAHgPAKgMQgPgHgNgLQgRgPgKgVQgKgVgBgXQgBgRAEgQQgJAAgKgBQgogGgbgZQgcgagIgnIgCgKQgKAIgNAHQghARgngGQgogGgbgZQgcgagIgnIgCgMIgNAHQghARgngGQgogGgbgZQgZgYgJgiQgMAKgOAIQghARgngGQgigFgZgUQgTAdgeAPQghARgngGIgJgCQgDAZgNAYQgTAjgiARQgbAOgggCIgIAQQgTAjgiARQghARgngGQgNgCgMgEQgDAMgHALQgTAjgiARQghARgngGQgogGgbgZQgcgagIgnQgJgnAPgiQAOgjAhgWQAigVAlABQAUABASAGIAEgKQAOgjAhgWQAigVAlABIACgDQAOgjAhgWQAigVAlABQAMAAALADQABgTAIgRQAOgjAhgWQAigVAlABQAoABAgAaQAOgWAXgPQAigVAlABQAsABAjAhQAaAZAJAfIAOgKQAigVAlABQAsABAkAhQAjAgAEAsQAigVAlABQAsABAkAhQAhAfAGArIAKgIQAigVAlABQAsABAkAhQAjAhAEAsQADAZgIAZQALAAAKADQAiAIAYAbQAYAbAFAiQAEAjgRAgQgFAKgGAIQAVAKAPARQAVAYAGAgQAHAigQAiQgQAhgeARQAPAIAMAOQAYAbAFAiQAEAjgRAgQgRAggeAQIgJAEQAYAbAFAiQAEAjgRAgQgRAggeAQIgCABIANANQAYAbAFAiQAEAjgRAgQgRAggeAQQgNAHgOADQAOAVADAYQAEAjgRAgQgRAhgeAQQgYAMgbAAIgQgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:258.0177,y:177.0787}).wait(1).to({graphics:mask_1_graphics_21,x:266.5335,y:182.0787}).wait(1).to({graphics:mask_1_graphics_22,x:272.9915,y:186.5787}).wait(1).to({graphics:mask_1_graphics_23,x:281.4835,y:191.0631}).wait(1).to({graphics:mask_1_graphics_24,x:287.4835,y:193.5631}).wait(1).to({graphics:mask_1_graphics_25,x:290.9835,y:193.5631}).wait(1).to({graphics:mask_1_graphics_26,x:291.9835,y:192.0381}).wait(1).to({graphics:mask_1_graphics_27,x:293.9835,y:183.0381}).wait(1).to({graphics:mask_1_graphics_28,x:294.0133,y:173.2161}).wait(1).to({graphics:mask_1_graphics_29,x:294.0133,y:164.5381}).wait(1).to({graphics:mask_1_graphics_30,x:294.0133,y:156.4945}).wait(1).to({graphics:mask_1_graphics_31,x:294.0133,y:152.4945}).wait(1).to({graphics:mask_1_graphics_32,x:294.0133,y:147.9945}).wait(1).to({graphics:mask_1_graphics_33,x:292.3618,y:144.9945}).wait(1).to({graphics:mask_1_graphics_34,x:283.3618,y:144.9945}).wait(1).to({graphics:mask_1_graphics_35,x:275.8618,y:144.9945}).wait(1).to({graphics:mask_1_graphics_36,x:269.8618,y:144.9945}).wait(1).to({graphics:mask_1_graphics_37,x:261.8618,y:144.9945}).wait(103));

	// lady02
	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(195.3,77.3,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(120));

	// pen03
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(329,254.95,1,1,0,0,0,-104,-77.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).wait(1).to({y:276.95},0).wait(1).to({x:322,y:296.65},0).wait(1).to({x:312,y:308.65},0).wait(1).to({x:296,y:318.65},0).wait(1).to({x:276,y:323.65},0).wait(1).to({x:263,y:334.65},0).wait(1).to({y:350.65},0).wait(1).to({x:273,y:365.3},0).wait(1).to({x:285,y:377.6},0).wait(1).to({x:292,y:392.6},0).wait(1).to({x:288,y:406.6},0).wait(1).to({x:290,y:421.5},0).wait(1).to({x:291,y:439.5},0).wait(1).to({x:289,y:454.5},0).to({_off:true},1).wait(87));

	// 遮色片03 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_38 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AgMDjQgngFgcgaQgbgagJgmQgIgnAOgjQAOghAfgVQgNgHgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAGALALQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_2_graphics_40 = new cjs.Graphics().p("Ag5E4QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgiQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAsQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgYANgcAAQgJAAgLgCg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AhmGDQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgEQgFgMgDgMQgIgnAOgjQAOghAegVQgNgIgLgKQgbgagJgmQgIgnAOgjQAPgjAggVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAiQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AjAG1QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAcAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgiAggVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiAQQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgmgGQgVgDgSgJQgCAZgNAZQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AkfHOQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAcAAAYAOQACgUAHgSQAOgjAhgVQASgMATgFIgBgDQgIgnAOgiQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIAQACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAighARQgiARgngGQghgFgZgTIgGAMQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AlbIFQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgmAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAkgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AllJLQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgiAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAhgiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AjtKbQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgUQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAkgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_47 = new cjs.Graphics().p("Ah1LcQgngFgcgaQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgiAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAhgiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQAEAlgTAjQgSAigiARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Ag5MiQgngFgcgaQgbgagJgmQgGgfAHgbQgNgHgMgLQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegTAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAYQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQACAWgGAWQANAIALALQAjAgAFAtQAEAlgTAjQgTAigiARQgYANgcAAQgJAAgLgCg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AhXNyQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgGgfAHgbQgNgHgMgLQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgiQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAhgiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQACAWgGAWQANAIALALQAjAgAFAtQAEAlgTAjQgNAWgTAQQAOAWADAcQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AhNO4QgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQANgeAZgUQgJgQgFgUQgGgfAHgbQgNgHgMgLQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQAJgVAPgQQgGgOgEgOQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAWQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQACAWgGAWQANAIALALQAjAgAFAtQAEAlgTAjQgNAWgTAQQAOAWADAcQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AgvQDQgngFgcgaQgbgagJgmQgIgnAOgjIAEgIIgEgEQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQANgeAZgUQgJgQgFgUQgGgfAHgbQgNgHgMgLQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgiQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAXQADAYgIAZIAGAAQAsABAjAhQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQACAWgGAWQANAIALALQAjAgAFAtQAEAlgTAjQgNAWgTAQQAOAWADAcQAEAlgTAjIgCAEQAXAcAEAkQAEAjgSAiIAEAEQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgbAAQgJAAgLgCg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AhhRYQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAJgGQgIgQgFgSQgIgnAOgjIAEgIIgEgEQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQANgeAZgUQgJgQgFgUQgGgfAHgbQgNgHgMgLQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJglQgIgnAOgjQAJgVAPgQQgGgOgEgPQgIgnAOgjQAPgjAhgVQAegUAiAAQACgSAGgQQAPgjAhgVQAhgWAmACQAnAAAgAbIAAgBQAPgjAhgVQAhgWAmACQAbAAAYAOQACgUAHgSQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQARgLARgFQgFgMgDgMQgIgnAOgjQAOghAfgVQgNgIgMgKQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgPAagYARQANAHALALQAjAgAFAtQAEAlgTAjQgTAigiARQgLAGgLADQAIARACAVQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgiARgngGQgVgDgSgJQgCAZgNAZQgTAigiARQgiARgmgGQghgFgZgTIgGAMQgTAigiARQgZAMgbABQgDAXgMAXQgIANgKAMQALATACAYQADAYgIAZIAGAAQAsABAjAgQAjAgAFAtQABAJgBAKIABAAQAsABAjAhQAiAgAFAtQACAWgGAWQANAIALALQAjAgAFAtQAEAlgTAjQgNAWgTAQQAOAWADAcQAEAlgTAjIgCAEQAXAcAEAkQAEAjgSAiIAEAEQAjAgAFAtQAEAlgTAjQgSAhghARQANAWADAaQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_2_graphics_38,x:202.7027,y:155.9484}).wait(1).to({graphics:mask_2_graphics_39,x:203.2027,y:166.4484}).wait(1).to({graphics:mask_2_graphics_40,x:199.7027,y:174.9484}).wait(1).to({graphics:mask_2_graphics_41,x:195.2027,y:182.4484}).wait(1).to({graphics:mask_2_graphics_42,x:186.2027,y:187.4484}).wait(1).to({graphics:mask_2_graphics_43,x:176.7027,y:189.9484}).wait(1).to({graphics:mask_2_graphics_44,x:170.7027,y:195.4484}).wait(1).to({graphics:mask_2_graphics_45,x:169.7027,y:202.4484}).wait(1).to({graphics:mask_2_graphics_46,x:169.7027,y:210.4484}).wait(1).to({graphics:mask_2_graphics_47,x:169.7027,y:216.9484}).wait(1).to({graphics:mask_2_graphics_48,x:169.7027,y:223.9484}).wait(1).to({graphics:mask_2_graphics_49,x:169.7027,y:231.9484}).wait(1).to({graphics:mask_2_graphics_50,x:169.7027,y:238.9484}).wait(1).to({graphics:mask_2_graphics_51,x:169.7027,y:246.4484}).wait(1).to({graphics:mask_2_graphics_52,x:169.7027,y:254.9484}).wait(88));

	// lady03
	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(131,152.25,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(102));

	// pen04
	this.instance_6 = new lib.手握筆();
	this.instance_6.setTransform(306.3,262.8,1,1,0,0,0,-104,-77.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).wait(1).to({x:286.3},0).wait(1).to({x:266.3,y:265.8},0).wait(1).to({x:249.3,y:274.8},0).wait(1).to({x:236.3,y:285.8},0).wait(1).to({x:229.3,y:307.8},0).wait(1).to({x:231.3,y:328.8},0).wait(1).to({x:239.3,y:344.8},0).wait(1).to({x:250.3,y:357.8},0).wait(1).to({x:257.3,y:369.8},0).wait(1).to({x:247.3,y:386.8},0).wait(1).to({x:244.3,y:401.8},0).wait(1).to({x:255.3,y:418.8},0).wait(1).to({x:269.3,y:432.8},0).wait(1).to({x:258.3,y:447.8},0).wait(1).to({x:264.3,y:466.8},0).wait(1).to({x:279.3,y:475.8},0).to({_off:true},1).wait(70));

	// 遮色片04 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_53 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Ah1CEQgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAmACQAsABAjAhIAJAIQAOgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgSAhghAQQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AjUCJQgngFgcgaQgbgagJgmQgIgnAOgiQAPgjAhgVQAhgWAmACQAsABAjAhIAHAGQANgSAUgMQAhgWAmACQArABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgmgGQgngFgcgaIgGgHQgSAYgaANQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AkpCxQgngFgcgaQgbgagJgmQgIgnAOgjQAPgiAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQAsABAjAhIAHAGQANgSATgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAiQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgbgaIgGgHQgSAYgaANQgiARgngGQgRgCgQgHQgEANgHAOQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AlvD8QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgmAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAPQgiARgngGQgngFgcgZIgGgHQgSAYgaAMQghARgngGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AmSFgQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgiQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiAQgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AmIHEQgngFgcgaQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgVgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAhgiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AlCIeQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgiQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAlQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AjAJVQgngFgcgaQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgmAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAkgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_62 = new cjs.Graphics().p("Ah6KWQgngFgcgaQgbgagJgmQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgZgJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAVgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AjeLrQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgiQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAsQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_64 = new cjs.Graphics().p("Aj8M7QgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJglQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAiIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AiEOLQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgOQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFArIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQADAYgIAZIAGAAQAsABAjAhQAiAgAFAtQAEAlgSAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AAHPMQgmgFgcgaQgbgagJgmQgDgSAAgQQgQACgSgDQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgmAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAgQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQADAYgIAZIAGAAQAsABAjAhQAiAgAFAtQABAKgBAKQALgCAKABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AhwQXQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAfgVAjABQgDgSAAgQQgQACgSgDQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgZgJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAsQACAPgDAQQARAIAOAOQAiAgAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQADAYgIAZIAGAAQAsABAjAhQAiAgAFAtQABAKgBAKQALgCAKABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgaANgcAAIACAOQAEAlgTAjQgSAigiARQgZANgcAAQgJAAgLgCg");
	var mask_3_graphics_68 = new cjs.Graphics().p("Ag0R2QgngFgcgaQgbgagJgmQgIgnAOgjQAGgOAJgMQgZgIgUgSQgbgagJgmQgIgnAOgjQAPgjAhgVQAfgVAjABQgDgSAAgQQgQACgSgDQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgWQgRgIgPgNQgbgZgJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAfAFAtQAEAlgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQADAYgIAZIAGAAQAsABAjAhQAiAgAFAtQABAKgBAKQALgCAKABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgaANgcAAIACAOQAEAlgTAjIgJANQAYAIAUAUQAjAgAFAtQAEAlgTAjQgTAigiARQgYANgcAAQgJAAgLgCg");
	var mask_3_graphics_69 = new cjs.Graphics().p("ABrSoQgngFgcgaQgbgagJgmIgBgJQgZAJgegFQgngFgcgaQgbgagJgmQgIgnAOgjQAGgOAJgMQgZgIgUgSQgbgagJgmQgIgnAOgjQAPgjAhgVQAfgVAjABQgDgSAAgQQgQACgSgDQgngFgcgaQgbgagJgmQgHgiAKgdIgUgCQgngFgcgaQgbgagJgmQgIgnAOgjQANgeAZgUQgJgQgFgUQgIgnAOgjQAPgjAhgVQAZgRAcgDQgEgKgDgKQgFgXADgVQgRgIgPgNQgbgagJgmIgCgNQgMAAgNgCQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgbgIgVgTQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAPgjAhgVQAUgNAVgFQgSgWgHgeQgIgnAOgjQAPgjAhgVQAhgWAmACIAQABIgBgBQgIgnAOgjQAPgjAhgVQAhgWAmACQAZAAAVALIAFgPQAPgjAhgVQAhgWAmACQArABAjAhIAHAGQANgSAUgMQAhgWAmACQAsABAjAhIAJAIQAPgZAagRQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgngFgcgaIgIgJQgTAhghAQQgiARgngGQgngFgcgaIgGgHQgSAYgaANQgiARgmgGQgRgCgQgHQgEANgHAOQgTAigiARQgiARgngGIgCAAIADAQQAEAlgTAjQgTAigiARQgPAIgQADQAZAcAEAmQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjIgCACQAaAIAVAVQAjAgAFAsIALAAQAsABAjAhQAjAgAFAtQACAPgDAQQARAIAOAOQAiAgAFAtQAEAkgTAjQgSAigiARQgUAKgVACQAHAQACATQAEAlgTAjQgNAWgTAQQAOAWADAcQADAYgIAZIAGAAQAsABAjAhQAiAgAFAtQABAKgBAKQALgCAKABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgaANgcAAIACAOQAEAlgTAjIgJANQAYAIAUAUQAhAeAGApQAVgGAVABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_3_graphics_53,x:180.7027,y:162.9484}).wait(1).to({graphics:mask_3_graphics_54,x:170.7027,y:163.9484}).wait(1).to({graphics:mask_3_graphics_55,x:161.2027,y:164.4484}).wait(1).to({graphics:mask_3_graphics_56,x:152.7027,y:168.4484}).wait(1).to({graphics:mask_3_graphics_57,x:145.7027,y:175.9484}).wait(1).to({graphics:mask_3_graphics_58,x:142.2027,y:185.9484}).wait(1).to({graphics:mask_3_graphics_59,x:142.2027,y:195.9484}).wait(1).to({graphics:mask_3_graphics_60,x:142.2027,y:204.9484}).wait(1).to({graphics:mask_3_graphics_61,x:142.2027,y:210.4484}).wait(1).to({graphics:mask_3_graphics_62,x:142.2027,y:216.9484}).wait(1).to({graphics:mask_3_graphics_63,x:142.2027,y:225.4484}).wait(1).to({graphics:mask_3_graphics_64,x:142.2027,y:233.4484}).wait(1).to({graphics:mask_3_graphics_65,x:142.2027,y:241.4484}).wait(1).to({graphics:mask_3_graphics_66,x:142.2027,y:247.9484}).wait(1).to({graphics:mask_3_graphics_67,x:142.2027,y:255.4484}).wait(1).to({graphics:mask_3_graphics_68,x:142.2027,y:264.9484}).wait(1).to({graphics:mask_3_graphics_69,x:142.2027,y:269.9484}).wait(71));

	// lady04
	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(99.25,158.25,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({_off:false},0).wait(87));

	// pen05
	this.instance_8 = new lib.手握筆();
	this.instance_8.setTransform(309.3,372.6,1,1,0,0,0,-104,-77.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).wait(1).to({x:310.3,y:400.6},0).wait(1).to({x:311.3,y:421.6},0).wait(1).to({y:442.6},0).wait(1).to({y:464.6},0).wait(1).to({x:297.3,y:481.6},0).wait(1).to({x:280.3,y:492.6},0).wait(1).to({x:256.3,y:499.6},0).wait(1).to({x:239.3,y:509.6},0).wait(1).to({x:223.3,y:523.6},0).to({_off:true},1).wait(60));

	// 遮色片05 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_70 = new cjs.Graphics().p("AgcCSQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AgSEPQgygJgigrQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgNgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAwAYAUAuQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AgNF9QgygJgigrQgjgqgBgzQAAgzAigqIAMgNQgLgJgJgMQgjgqgBgzQAAgyAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAwAZAUAuQAUAugPA0QgLAogaAaQAcAWAOAhQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgPAAQgPAAgNgDg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AgNHrQgygJgigrQgjgqgBgzQAAgzAigqQAIgKAIgIIgOgQQgjgqgBgzQAAgzAigqIAMgNQgLgJgJgLQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAwAZAUAuQAUAvgPA0QgLAogaAZQAcAWAOAhQAUAvgPA0QgMArgeAcQAYAUANAeQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgPAAQgPAAgNgDg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AgXJeQgygJgigrQgjgqgBgzQAAgzAigqQANgQAOgLIgPgRQgjgqgBgzQAAgzAigqQAIgKAIgIIgOgQQgjgqgBgzQAAgyAigqIAMgNQgLgJgJgMQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAwAZAUAuQAUAvgPA0QgLAogaAaQAcAWAOAhQAUAvgPAzQgMArgeAcQAYAUANAeQAUAvgPA0QgOAzgnAdQAZAVANAeQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AhiK9QgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLIATgDQgGgTgBgVQAAgzAigqQANgQAOgLIgPgRQgjgqgBgzQAAgzAigqQAIgKAIgIIgOgQQgjgpgBgzQAAgzAigqIAMgNQgLgJgJgMQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAxgLQAygKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAwAZAUAuQAUAvgPA0QgLAogaAaQAcAWAOAhQAUAvgPA0QgMArgeAbQAYAUANAeQAUAvgPA0QgOAzgnAdQAZAVANAeQAUAvgPA0QgPA1gpAdQgZASgeAGIgSACQAMAngNArQgPA1gpAdQgYASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_4_graphics_76 = new cjs.Graphics().p("Ai3LlQgygJgigrQgjgqAAgzQgBgzAjgqQAigrAygKQAhgHAhAJQAIgPALgOQAigrAygLIARgDQgFgTAAgVQAAgzAhgqQAMgQAPgLIgPgRQgjgqgBgzQAAgzAigqQAIgJAIgIIgOgQQgjgqgBgzQAAgzAigqIALgNQgKgJgJgMQgigqgBgzQAAgzAhgqQAMgPAOgLQgZgOgTgYQgigqgBgzQAAgzAhgqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAvAZAVAuQAUAvgPA0QgLAogaAaQAbAWAPAhQAUAvgPA0QgMAsgeAbQAYAUANAdQAUAvgPA0QgOAzgnAdQAYAVAOAeQAUAvgPA0QgPA1gpAdQgZASgeAGIgSACQALAogMAqQgPA1gpAdQgZASgeAGQgfAGgcgGIgIgCQgQAjgfAXQgYARgfAHQgQADgPAAQgPAAgOgDg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AkjMOQg3gIgmgwQgmgwAFg4QAFg4AugoQAtgpA4ABQAuABAlAdQAIgcAVgZQAigrAygKQAhgHAhAJQAHgPALgOQAigrAygLIASgDQgGgTAAgVQAAgzAigqQAMgQAPgLIgPgRQgjgqgBgzQAAgzAigpQAIgKAIgIIgOgQQgjgqgBgzQAAgzAigqIALgNQgKgJgJgMQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAvAZAVAuQAUAvgPA0QgLAogaAaQAbAWAPAhQAUAvgPA0QgMArgeAcQAYAUANAeQAUAugPA0QgOAzgnAdQAYAVAOAeQAUAvgPA0QgPA1gpAdQgZASgeAGIgSACQALAngMArQgPA1gpAdQgZASgeAGQgfAGgdgGIgIgCQgQAjgfAXQgYARgeAHQgeAGgegGQgggGgagUIgGASQgNAggYAVQgZAWggAKQgVAGgWAAQgLAAgLgCg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AmDM6QgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAkgIAjAMQANggAdgZQAtgpA4ABQAuABAlAdQAIgcAVgZQAigrAxgKQAhgIAhAKQAIgPALgOQAigrAygLIASgDQgGgTAAgVQAAgzAigqQAMgQAPgLIgPgRQgjgqgBgzQAAgyAigqQAIgKAIgIIgOgQQgjgqgBgzQAAgzAigqIALgNQgKgJgJgMQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAvAZAVAuQAUAvgPA0QgLAogaAaQAbAWAPAhQAUAvgPA0QgMArgeAcQAYAUANAeQAUAvgPAzQgOAzgnAdQAYAVAOAeQAUAvgPA0QgPA1gpAdQgZASgeAGIgSACQALAngMArQgPA1gpAdQgZASgeAGQgfAGgdgGIgIgCQgQAjgfAXQgYARgfAHQgeAGgegGQgfgGgagUIgGASQgNAggYAVQgZAWggAKQggAJghgFIgTgEQgRAsgkAZQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AnTOAQgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAVgEAVACQACguAggmQAigrAygLQAkgIAjAMQANggAdgZQAtgpA4ABQAuABAlAdQAIgcAUgZQAigrAygKQAhgIAhAKQAIgPALgOQAigrAygLIASgDQgGgTAAgVQAAgzAigqQAMgQAPgLIgPgRQgjgpgBgzQAAgzAigqQAIgKAIgIIgOgQQgjgqgBgzQAAgzAigqIALgNQgKgJgJgMQgjgqgBgzQAAgzAigqQAMgPAOgLQgZgOgTgYQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgOAzgnAdQAvAZAVAuQAUAvgPA0QgLAogaAaQAbAWAPAhQAUAvgPA0QgMArgeAcQAYAUANAeQAUAvgPA0QgOAygnAdQAYAVAOAeQAUAvgPA0QgPA1gpAdQgZASgeAGIgSACQALAngMArQgPA1gpAdQgZASgeAGQgfAGgdgGIgIgCQgQAjgfAXQgYARgfAHQgeAGgegGQgggGgagUIgGASQgNAggYAVQgYAWggAKQggAJghgFIgTgEQgRAsgkAZQgZASgeAGQgWAEgVgBQgBAPgEAQQgPA1gqAdQgZASgeAGQgQADgPAAQgOAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_4_graphics_70,x:182.9165,y:274.9409}).wait(1).to({graphics:mask_4_graphics_71,x:183.9165,y:287.4409}).wait(1).to({graphics:mask_4_graphics_72,x:184.4165,y:298.4409}).wait(1).to({graphics:mask_4_graphics_73,x:184.4165,y:309.4409}).wait(1).to({graphics:mask_4_graphics_74,x:184.4165,y:320.9409}).wait(1).to({graphics:mask_4_graphics_75,x:178.9165,y:330.4409}).wait(1).to({graphics:mask_4_graphics_76,x:170.4415,y:334.4284}).wait(1).to({graphics:mask_4_graphics_77,x:158.9378,y:338.4331}).wait(1).to({graphics:mask_4_graphics_78,x:149.9415,y:342.9409}).wait(1).to({graphics:mask_4_graphics_79,x:141.9415,y:349.9409}).wait(61));

	// lady05
	this.instance_9 = new lib.CachedBmp_5();
	this.instance_9.setTransform(96.75,268.65,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).wait(70));

	// pen06
	this.instance_10 = new lib.手握筆();
	this.instance_10.setTransform(414.3,359.8,1,1,0,0,0,-104,-77.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80).to({_off:false},0).wait(1).to({x:410.3,y:381.8},0).wait(1).to({x:396.3,y:392.8},0).wait(1).to({x:379.3,y:405.8},0).wait(1).to({x:356.3},0).wait(1).to({x:337.3,y:399.8},0).wait(1).to({x:320.3,y:384.8},0).wait(1).to({x:311.3,y:364.8},0).wait(1).to({x:307.3,y:348.8},0).to({_off:true},1).wait(51));

	// 遮色片06 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_80 = new cjs.Graphics().p("AgcCSQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AgwEAQgygJgigrQgjgqgBgzQAAgzAigqQASgWAWgNQghgpgBgyQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAcIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAdQgZASgeAGQgPADgPAAQgPAAgOgDg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AhxFBQgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLIANgCQAFgnAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAhgrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAugPA0QgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgYASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AjLF9QgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAhgHAfAJQAHglAZgfQAigqAygLIANgCQAFgoAbgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgcgGIgFgBIgEAPQgPA1gpAdQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_84 = new cjs.Graphics().p("Ak+GWQgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAPAIANAKQAIgPALgOQAigrAygLQAhgHAfAJQAHglAYgeQAigrAygLIANgCQAFgoAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgdgGIgFgBIgEAPQgPA1gpAdQgZASgdAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AjfGWQgygJgigrQgVgZgIgcIgRAFQgfAGgdgGQgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvIAGASIAQgFQAygKAxAZQAPAIANAKQAIgPALgOQAigrAxgLQAhgHAfAJQAHglAZgeQAigrAygLIANgCQAFgoAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgdgGIgFgBIgEAPQgPA1gpAdQgZASgeAGQgfAGgdgGQglgHgdgaQgQAlggAWQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AiKGWQgygJgigrQgVgZgIgcIgRAFQgfAGgdgGQgygJgigrQgjgqgBgzIAAgEQgZAEgZgFQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAygKAxAZQAwAZAVAvQANAdgBAfQAtgGAsAXQAwAZAVAvIAGASIAQgFQAygKAxAZQAPAIANAKQAIgPAKgOQAigrAygLQAhgHAfAJQAHglAZgeQAigrAygLIANgCQAFgoAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgdgGIgFgBIgEAPQgPA1gpAdQgZASgeAGQgfAGgdgGQgmgHgdgaQgQAlgfAWQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AhiGWQgygJgigrQgVgZgIgcIgRAFQgfAGgdgGQgygJgigrQgjgqgBgzIAAgEQgZAEgZgFQgygJgigrQgjgqgBgzQAAgXAHgVQgdgOgWgcQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0IgBAGIAHADQAwAZAVAvQANAdgBAfQAtgGAsAXQAwAZAVAvIAGASIAQgFQAygKAxAZQAOAIANAKQAIgPALgOQAigrAygLQAhgHAfAJQAHglAZgeQAigrAygLIANgCQAFgoAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgdgGIgFgBIgEAPQgPA1gpAdQgZASgeAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgYASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_5_graphics_88 = new cjs.Graphics().p("Ag/G5QgygJgigrQgVgZgIgcIgRAFQgfAGgdgGQgygJgigrQgjgqgBgzIAAgEQgZAEgZgFQgygJgigrQgjgqgBgzQAAgYAHgVQgdgNgWgcQgjgqgBgzQAAgRAEgQQgVgNgRgVQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQATArgMAxQAsAYATAsQAUAvgPA0IgBAGIAHADQAwAZAVAvQANAcgBAgQAtgGAsAXQAwAZAVAvIAGASIAQgFQAygKAwAZQAPAIANAKQAIgPALgOQAigrAygLQAhgHAfAJQAHglAZgfQAigqAygLIANgCQAFgoAcgiQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgZASgeAGIgOACQgBALgEALQgPA1gpAdQgZASgeAGQgfAGgdgGIgFgBIgEAPQgPA1gpAdQgZASgeAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgZASgdAGQgQADgPAAQgPAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_5_graphics_80,x:288.9165,y:259.9409}).wait(1).to({graphics:mask_5_graphics_81,x:286.9165,y:270.9409}).wait(1).to({graphics:mask_5_graphics_82,x:280.4165,y:277.4409}).wait(1).to({graphics:mask_5_graphics_83,x:271.4165,y:283.4409}).wait(1).to({graphics:mask_5_graphics_84,x:259.9165,y:285.9409}).wait(1).to({graphics:mask_5_graphics_85,x:250.4165,y:285.9409}).wait(1).to({graphics:mask_5_graphics_86,x:241.9165,y:285.9409}).wait(1).to({graphics:mask_5_graphics_87,x:237.9165,y:285.9409}).wait(1).to({graphics:mask_5_graphics_88,x:234.4165,y:282.4409}).wait(52));

	// lady06
	this.instance_11 = new lib.CachedBmp_6();
	this.instance_11.setTransform(179.55,246.75,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80).to({_off:false},0).wait(60));

	// pen07
	this.instance_12 = new lib.手握筆();
	this.instance_12.setTransform(403.3,388.8,1,1,0,0,0,-104,-77.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({_off:false},0).wait(1).to({x:398.3,y:411.8},0).wait(1).to({x:403.3,y:429.8},0).wait(1).to({x:416.3,y:441.8},0).wait(1).to({x:435.3,y:444.8},0).wait(1).to({x:455.3,y:439.8},0).wait(1).to({x:475.3,y:438.8},0).wait(1).to({x:494.3,y:439.8},0).wait(1).to({x:513.3,y:444.8},0).wait(1).to({x:526.3,y:459.8},0).wait(1).to({x:539.3,y:480.8},0).wait(1).to({x:545.3,y:498.8},0).to({_off:true},1).wait(39));

	// 遮色片07 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_89 = new cjs.Graphics().p("AgcCSQgygKgigqQgjgqgBgzQAAgyAigrQAigqAygLQAxgLAxAaQAwAZAVAuQAUAvgPA0QgPA1gpAdQgZARgeAGQgQAEgPAAQgOAAgOgDg");
	var mask_6_graphics_90 = new cjs.Graphics().p("Ag1EAQgygKgigqQgjgqgBgzQAAgzAigrQAVgYAagOQgegogBgvQAAgzAigrQAigqAygLQAxgLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAcIgQAKQAKANAHAPQAUAvgPA1QgPA1gpAdQgZARgeAGQgPAEgPAAQgPAAgOgDg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AgDFkQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgqgBgzQAAgyAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAxgLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA0QgFATgJAQQApAYASApQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgNgDg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AA4GqQgygKghgqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAwAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYASApQALAbABAbQATAFAUAKQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_93 = new cjs.Graphics().p("ACXG0QgsgIgggjQgZARgdAFQgeAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAUAuQAUAvgPA1QgOA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYARApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AAzG0QgsgIgfgjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAWgRAdgGQAygLAxAaIACABQAGgMAJgLQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AgwG0QgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAwAaIACABQAGgMAJgLQAigqAygLQAygLAxAaIAQAKIABgCQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgegGgYgSQgNARgSANQgZARgeAGQgfAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgPAEgPAAQgPAAgOgDg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AiKG0QgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaIACABQAGgMAJgLQAhgqAygLQAygLAxAaIAQAKIABgCQAigqAygLQAygLAxAaQAcAPATAWQAQgIASgEQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgygKgigqIgBgBQgQAJgTADQgfAHgdgGQgegGgYgSQgNARgSANQgZARgeAGQgfAHgdgGQgWgEgTgLQgQAfgbAUQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AIiG0QgygKgigqQgIgKgGgKQgYAQgcAFQgfAHgdgGQgygKgigqIgBgBQgQAJgTADQgfAHgdgGQgegGgYgSQgNARgSANQgZARgeAGQgeAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgfAHgdgGQgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgpgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAPQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaIACABQAGgMAJgLQAigqAygLQAxgLAxAaIAQAKIABgCQAigqAygLQAygLAxAaQAcAPATAWQAQgIASgEQAygLAxAaQAoAVAVAjQAXgPAbgGQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AJjH/QgygKgigqQgjgqgBgzIAAgDIgKgCQgygKgigqQgIgKgGgKQgYAQgcAFQgfAHgdgGQgygKgigqIgBgBQgQAJgTADQgfAHgdgGQgegGgYgSQgNARgSANQgYARgeAGQgfAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgfAHgdgGQgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgzQAAgoAVgiQgTgMgQgUQgjgqgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAQQApAYASApQALAaABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaIACABQAGgMAJgLQAigqAygLQAygKAxAZIAPAKIABgCQAigpAygLQAygLAxAaQAcAOATAWQAQgIASgEQAygLAxAaQAoAVAVAjQAXgPAbgGQAygLAxAaQAwAZAVAuQANAegBAgQAYAEAZANQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AKkJeQgygKgigqQgjgqgBgzQAAgWAHgVIgRgCQgygKgigqQgjgqgBgzIAAgDIgKgCQgygKgigqQgIgKgGgKQgYAQgcAFQgfAHgdgGQgygKgigqIgBgBQgQAJgTADQgfAHgdgGQgdgGgYgSQgNARgSANQgZARgeAGQgfAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgfAHgdgGQgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygKgigqQgjgqgBgyQAAgoAVgjQgTgMgQgUQgjgqgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAQQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaIACABQAGgMAJgLQAigqAygLQAygLAxAaIAQAKIABgCQAigqAxgLQAygLAxAaQAcAPATAWQAQgIASgEQAygLAxAaQAoAVAVAjQAXgPAbgGQAygLAxAaQAwAYAVAuQANAegBAgQAYAEAZANQAwAZAVAuQAUAvgPA1IAAABQAcADAcAPQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");
	var mask_6_graphics_100 = new cjs.Graphics().p("ALCLCQgygKgigqQgjgqgBgzQAAglASghQgXgOgTgXQgjgqgBgzQAAgWAHgVIgRgCQgygKgigqQgjgqgBgzIAAgDIgKgCQgygKgigqQgIgKgGgKQgYAQgcAFQgfAHgdgGQgygKgigqIgBgBQgQAJgTADQgfAHgcgGQgegGgYgSQgNARgSANQgZARgeAGQgfAHgdgGQgWgEgTgLQgQAfgcAUQgZARgeAGQgfAHgdgGQgsgIgggjQgZARgdAFQgfAHgdgGQgygKgigqQghgogCgwIgBAAQgygJgigqQgjgqgBgzQAAgoAVgjQgTgMgQgUQgjgqgBgzQAAgzAigrQAVgZAagOQgegogBgvQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgQAKQAKANAHAPQAUAvgPA1QgFATgJAQQApAYASApQALAbABAbQATAFAUAKQAWAMARAQQAXgRAdgGQAygLAxAaIACABQAGgMAJgLQAigqAygLQAygLAxAaIAQAKIABgCQAigqAygLQAxgLAxAaQAcAPATAWQAQgIASgEQAygLAxAaQAoAVAVAjQAXgPAbgGQAygLAxAaQAwAZAVAuQANAegBAfQAYAEAZANQAwAZAVAuQAUAvgPA1IAAABQAcADAcAPQAwAZAVAuQAUAvgPA1QgEAQgHAOQAuAZAUAtQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgPAAQgPAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_6_graphics_89,x:277.9165,y:288.9532}).wait(1).to({graphics:mask_6_graphics_90,x:275.4165,y:299.9532}).wait(1).to({graphics:mask_6_graphics_91,x:275.4165,y:309.9532}).wait(1).to({graphics:mask_6_graphics_92,x:281.4165,y:316.9532}).wait(1).to({graphics:mask_6_graphics_93,x:290.9165,y:317.9532}).wait(1).to({graphics:mask_6_graphics_94,x:300.9165,y:317.9532}).wait(1).to({graphics:mask_6_graphics_95,x:310.9165,y:317.9532}).wait(1).to({graphics:mask_6_graphics_96,x:319.9165,y:317.9532}).wait(1).to({graphics:mask_6_graphics_97,x:330.4165,y:317.9532}).wait(1).to({graphics:mask_6_graphics_98,x:336.9165,y:325.4532}).wait(1).to({graphics:mask_6_graphics_99,x:343.4165,y:334.9532}).wait(1).to({graphics:mask_6_graphics_100,x:346.4165,y:344.9532}).wait(40));

	// lady07
	this.instance_13 = new lib.CachedBmp_7();
	this.instance_13.setTransform(270.45,282.15,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).wait(51));

	// pen08
	this.instance_14 = new lib.手握筆();
	this.instance_14.setTransform(426.75,452.8,1,1,0,0,0,-104,-77.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(101).to({_off:false},0).wait(1).to({x:407.75,y:460.8},0).wait(1).to({x:387.75,y:468.8},0).wait(1).to({x:369.75,y:478.8},0).wait(1).to({x:350.75,y:486.8},0).wait(1).to({x:327.75,y:492.8},0).wait(1).to({x:307.75,y:500.8},0).wait(1).to({x:283.75},0).to({_off:true},1).wait(31));

	// 遮色片08 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_101 = new cjs.Graphics().p("AgcCSQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_7_graphics_102 = new cjs.Graphics().p("Ah7CwQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAvgKAuAWQAGgJAHgJQAhgrAygLQAygKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgZASQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AjaDYQgygJgigrQgjgqgBgzQAAgzAigpQAigrAygLQArgJAqARQAIgSANgQQAigrAygLQAugKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA0gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaASQgZASgeAGQgfAGgcgGQgNgCgMgFQgQAngiAYQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_104 = new cjs.Graphics().p("Ak5EKQgygJgigrQgjgqgBgzQAAgzAigqQAigqAygLQAogIAmAOQAIgcAUgYQAigrAygLQArgJAqARQAIgSANgQQAhgrAygLQAvgKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAcQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaASQgZASgeAGQgfAGgdgGQgNgCgMgFQgQAnghAYQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AmYE8QgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAogIAmAOQAIgcAUgXQAigrAygLQAogIAmAOQAIgcAUgYQAigrAygLQAqgJAqARQAIgSANgQQAigrAygLQAvgKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaARQgZASgeAGQgfAGgdgGQgNgCgMgFQgQAngiAYQgZASgeAGQgfAGgcgGIgTgFQgPA0gpAdQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AoLFVQgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAPAIANAKQAIgPALgOQAigrAygKQAogIAmANQAIgbAUgYQAigrAygLQAogIAmAOQAIgcATgYQAigrAygLQArgJAqARQAIgSANgQQAigrAygLQAvgKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaASQgZARgeAGQgfAGgdgGQgNgCgMgFQgQAngiAYQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgYASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgeAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_107 = new cjs.Graphics().p("ApvF9QgygJgigrQgjgqgBgzQAAgzAigqQAigrAygLQAvgKAuAWQAIgUAPgSQAigrAygLQAygJAxAYQAPAIANAKQAIgPALgOQAigqAygLQAogIAmAOQAIgcAUgYQAigrAygLQAngIAmAOQAIgcAUgYQAigrAygLQArgJAqARQAIgSANgQQAigrAygLQAvgKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaASQgZASgeAGQgfAGgdgGQgNgCgMgFQgQAmgiAYQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgeAGQgfAGgcgGIgTgFQgPA0gpAdQgZASgeAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgZASgeAGQgfAGgdgGQgSgDgQgIQgQAqgjAZQgZASgeAGQgQADgPAAQgPAAgOgDg");
	var mask_7_graphics_108 = new cjs.Graphics().p("ArsGCQgygJgigrQgjgqgBgzQAAgzAigqQAigrAygKQAygLAxAZQAjARAUAdIAMgRQAigrAygLQAvgKAuAWQAIgUAPgSQAigrAygLQAygJAxAYQAPAIANAKQAIgPALgOQAigqAygLQAogIAlAOQAIgcAUgYQAigrAygLQAogIAmAOQAIgcAUgYQAigrAygLQArgJAqARQAIgSANgQQAigrAygLQAvgKAuAWQAGgJAHgJQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgRgDgQgIQgQAdgaASQgZASgeAGQgfAGgdgGQgNgCgMgFQgQAngiAXQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgeAGQgfAGgdgGIgTgFQgPA0gpAdQgZASgdAGQgfAGgdgGQgmgHgdgaQgQAlggAWQgZASgeAGQgfAGgdgGQgSgDgQgIQgQAqgjAZQgZASgeAGQgfAGgdgGQgygJgigrIgIgKQgQAdgbATQgZASgeAGQgQADgPAAQgPAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(101).to({graphics:mask_7_graphics_101,x:301.9165,y:355.9409}).wait(1).to({graphics:mask_7_graphics_102,x:292.4165,y:358.9409}).wait(1).to({graphics:mask_7_graphics_103,x:282.9165,y:362.9409}).wait(1).to({graphics:mask_7_graphics_104,x:273.4165,y:367.9409}).wait(1).to({graphics:mask_7_graphics_105,x:263.9165,y:372.9409}).wait(1).to({graphics:mask_7_graphics_106,x:252.4165,y:375.4409}).wait(1).to({graphics:mask_7_graphics_107,x:242.4165,y:379.4409}).wait(1).to({graphics:mask_7_graphics_108,x:229.9165,y:379.9409}).wait(32));

	// lady08
	this.instance_15 = new lib.CachedBmp_8();
	this.instance_15.setTransform(153.35,351.75,0.5,0.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(101).to({_off:false},0).wait(39));

	// pen09
	this.instance_16 = new lib.手握筆();
	this.instance_16.setTransform(383.3,362.8,1,1,0,0,0,-104,-77.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(109).to({_off:false},0).wait(1).to({x:377.3,y:360.8},0).wait(1).to({x:367.3},0).wait(1).to({x:358.3},0).wait(1).to({x:349.3},0).wait(1).to({x:351.3,y:371.6},0).wait(1).to({x:363.3,y:376.6},0).wait(1).to({x:374.3},0).wait(1).to({x:385.3,y:371.6},0).to({_off:true},1).wait(22));

	// 遮色片09 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_109 = new cjs.Graphics().p("AgIA/QgWgEgPgPQgKgLgFgPQgEgPADgOQAEgVARgPQARgPAVgBQAUgBATANQASANAGAVQAGATgIAVQgIAVgTALQgOAJgRAAIgJgBg");
	var mask_8_graphics_110 = new cjs.Graphics().p("AAVBOQgVgEgPgPIgIgLQgHABgIgBQgWgEgPgPQgKgLgFgPQgEgOADgPQAEgVARgPQARgPAVgBQAWgBARANQALAIAGALIADgBQAVgBATANQASANAGAVQAGATgIAVQgIAVgTALQgOAJgRAAIgKgBg");
	var mask_8_graphics_111 = new cjs.Graphics().p("ABHBOQgWgEgPgPIgIgLQgHABgIgBQgTgDgOgNQgIASgRAKQgSALgXgDQgWgEgPgPQgKgLgFgPQgEgPADgOQAEgVARgPQARgPAVgBQAVgBATANIAGAFQAFgLALgKQARgPAUgBQAWgBASANQALAIAGALIADgBQAVgBATANQASANAGAVQAGATgIAVQgIAVgTALQgOAJgRAAIgKgBg");
	var mask_8_graphics_112 = new cjs.Graphics().p("AB0BOQgWgEgPgPIgIgLQgHABgIgBQgUgDgOgNQgIASgQAKQgSALgXgDQgWgEgPgPIgIgLIgEACQgSALgXgDQgWgEgPgPQgKgLgFgPQgEgOADgPQAEgVARgPQARgPAVgBQAVgBATANQALAJAHALQAPgLARgBQAVgBASANIAGAFQAFgLALgKQARgPAVgBQAWgBASANQALAIAGALIADgBQAVgBATANQASANAGAVQAGATgIAVQgIAVgTALQgOAJgRAAIgKgBg");
	var mask_8_graphics_113 = new cjs.Graphics().p("AChBOQgWgEgPgPIgIgLQgHABgIgBQgUgDgOgNQgIASgRAKQgSALgXgDQgVgEgPgPIgIgLIgEACQgSALgXgDQgSgDgNgKQgHAJgLAGQgSALgXgEQgWgDgPgPQgKgLgFgPQgEgOADgPQAEgVARgPQARgPAVgBQAVgBATANIADADIAJgJQARgPAVgBQAVgBATANQALAJAHALQAPgLAQgBQAVgBATANIAGAFQAFgLALgKQARgPAVgBQAWgBASANQALAIAGALIADgBQAVgBATANQASANAGAVQAGATgIAVQgIAVgTALQgOAJgRAAIgKgBg");
	var mask_8_graphics_114 = new cjs.Graphics().p("AjGBsQgUgOgJgYQgJgYAFgXQADgSALgMQgJgLgEgNQgEgPADgPQAEgVARgOQARgPAVgBQAVgBATANIAEACIAIgIQARgPAVgBQAVgBATANQAMAIAGALQAPgLAQAAQAVgBATANIAGAEQAFgLALgJQARgPAVgBQAWgBASANQALAHAHALIACAAQAVgBATANQASANAGAUQAGAVgIAVQgIAUgTALQgSAKgXgDQgWgDgPgPIgIgLQgHAAgIgBQgUgDgOgMQgIASgRAKQgSAKgXgDQgVgDgPgPIgIgLIgEADQgMAGgOABIACAGQAKAZgIAcQgHAbgWARQgVAQgdABIgBAAQgcAAgVgQg");
	var mask_8_graphics_115 = new cjs.Graphics().p("AhYCFQgUgOgJgYIAAgCQgOAFgRABQgcAAgWgQQgUgOgJgYQgJgYAFgWQADgSALgNQgJgLgEgNQgEgPADgPQAEgVARgOQARgPAVgBQAVgBATANIAEACIAIgIQARgPAVgBQAVgBATANQAMAIAGALQAPgLAQAAQAVgBATANIAGAEQAFgLALgJQARgPAVgBQAWgBASANQALAHAHALIACAAQAVgBATANQASANAGAUQAGAVgIAVQgIAVgTAKQgSAKgXgDQgWgDgPgOIgIgLQgHAAgIgBQgUgDgOgNQgIATgRAKQgOAIgRAAQATANAIAWQAKAZgIAcQgHAbgWARQgUAQgdABIgBAAQgcAAgVgQgAgvgcQgMAHgOABIACAGIABACQAMgFAMAAIANAAIgCgCIgIgMIgEADg");
	var mask_8_graphics_116 = new cjs.Graphics().p("AAVCPQgKgHgHgJQgSALgYABQgcAAgWgQQgUgOgJgYIAAgCQgOAFgRABQgcAAgWgQQgUgOgJgYQgJgYAFgWQADgSALgNQgJgLgEgNQgEgPADgPQAEgVARgOQARgPAVgBQAVgBATANIAEACIAIgIQARgPAVgBQAVgBATANQAMAIAGALQAPgLAQAAQAVgBATANIAGAEQAFgLALgJQARgPAVgBQAWgBASANQALAHAHALIACAAQAVgBATANQASANAGAUQAGAVgIAVQgIAVgTALQgSAJgXgCQgWgDgPgPIgIgLQgHAAgIgBQgUgDgOgNQgIATgRAKQgOAIgRAAQAJAGAHAIQAQgKAUgBQAbgCAYAOQAZAPAJAZQAKAZgIAcQgHAbgWARQgVAQgdABIgBAAQgcAAgVgQgAgvgmQgMAHgOABIACAGIABACQAMgFAMAAIANAAIgCgCIgIgMIgEADg");
	var mask_8_graphics_117 = new cjs.Graphics().p("AALCPQgKgHgGgJQgTALgYABQgcAAgWgQQgUgOgJgYIAAgCQgOAFgRABQgcAAgWgQQgUgOgJgYQgJgYAFgWQADgSALgNQgJgLgEgNQgEgPADgPQAEgVARgOQARgPAVgBQAVgBATANIAEACIAIgIQARgPAVgBQAVgBATANQALAIAHALQAPgLARAAQAUgBATANIAGAEQAFgLALgJQARgPAVgBQAWgBASANQALAHAHALIACAAQAVgBATANQASANAGAUQAGAVgIAVIgCAFQAOAMAHATQAKAYgIAcQgHAbgWARQgVAQgdABQgMAAgLgDQgJAWgSAOQgVAQgdABIgBAAQgcAAgVgQgAARAEQAQgKAUgBQAPgCAOAEQAFgOALgLIgHgBQgUgDgOgNQgIATgRAKQgOAIgRAAQAJAGAHAIgAg5gmQgMAHgOABIACAGIABACQAMgFAMAAIANAAIgCgCIgIgMIgEADg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_8_graphics_109,x:257.9391,y:264.9548}).wait(1).to({graphics:mask_8_graphics_110,x:254.9391,y:263.4548}).wait(1).to({graphics:mask_8_graphics_111,x:249.9391,y:263.4548}).wait(1).to({graphics:mask_8_graphics_112,x:245.4391,y:263.4548}).wait(1).to({graphics:mask_8_graphics_113,x:240.9391,y:263.4548}).wait(1).to({graphics:mask_8_graphics_114,x:240.9129,y:267.9472}).wait(1).to({graphics:mask_8_graphics_115,x:240.9129,y:270.4472}).wait(1).to({graphics:mask_8_graphics_116,x:240.9129,y:271.4472}).wait(1).to({graphics:mask_8_graphics_117,x:241.9166,y:271.4472}).wait(23));

	// lady09
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("AhhBNQgWgWgpghIgsgjQgJgJACgHQABgEAGgDQAxgVAmgUQBKgoAjAAQAGABATAHQATAIAKAAQADAAAXgIQASgGARAHQAZALAiAmQAmArAHAmQAEAEgHAIIgWAWIgkAmQgdAYggAAQiSAAgogpgAhWgdIg0AKQAYAAA7ARQBEATANACQAYAEAsgEIA8gGQgwgvgMABQglAEgWAAQgKAAgQgFQgPgFgLgBQgOAAg3ALg");
	this.shape.setTransform(243.4226,270.45);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(109).to({_off:false},0).wait(31));

	// pan10
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(303,358.95,1,1,0,0,0,-104,-77.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(118).to({_off:false},0).wait(1).to({x:295.25},0).to({_off:true},1).wait(20));

	// 遮色片10 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_118 = new cjs.Graphics().p("AgTBSQgegHgTgcQgSgbADgeQADgUAMgRQAMgRARgKQASgJAVAAQAUgBASAJQAbAOANAfQAMAegKAdQgLAdgdAQQgVAKgTAAQgKAAgJgCg");
	var mask_9_graphics_119 = new cjs.Graphics().p("Ag+BgQgbgGgUgTQgWgWgGggQgFggAOgcQAJgTARgNQARgOAUgFQAUgFAWAEQAVAEAQAMIADACQARgIAUAAQAVgBASAJQAbAOANAfQAMAfgKAcQgLAdgdAQQgeAPgegHIgOgFQgOAMgQAGQgPAFgQAAQgLAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(118).to({graphics:mask_9_graphics_118,x:179.5868,y:261.0826}).wait(1).to({graphics:mask_9_graphics_119,x:174.0871,y:261.2979}).wait(21));

	// lady10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_1.setTransform(170.825,260.625);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(118).to({_off:false},0).wait(22));

	// pen11
	this.instance_18 = new lib.手握筆();
	this.instance_18.setTransform(439.35,382.25,1,1,0,0,0,-104,-77.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120).to({_off:false},0).wait(1).to({x:431.35,y:395.05},0).wait(1).to({x:440.15,y:404.65},0).wait(1).to({x:449.75,y:414.25},0).wait(1).to({x:448.15,y:424.65},0).wait(1).to({x:442.55,y:435.85},0).to({_off:true},1).wait(14));

	// 遮色片11 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_120 = new cjs.Graphics().p("AgGBiQgVgBgSgKQgdgPgOgfQgOgfAHgfQAHgfAbgWQAagWAggBQAfgBAcAUQAcAUAKAeQAJAhgMAfQgHATgPAPQgPAPgUAHQgQAGgRAAIgHAAg");
	var mask_10_graphics_121 = new cjs.Graphics().p("Ag0ChQgegFgUgTQgVgUgHgdQgIgdAKgbQAJgbAYgRQATgPAVgEQgJgbAGgbQAHgfAagWQAagWAggBQAggBAcAUQAcAUAJAeQAKAigMAfQgIATgPAOQgPAPgTAHIgPAEQAMAfgMAiQgHATgOAPQgOAPgSAIQgRAIgUAAIgSgBg");
	var mask_10_graphics_122 = new cjs.Graphics().p("AAjDYQgegCgXgUQgYgUgJgdQgFgTACgTIgEgBQgdgFgVgTQgVgTgHgdQgHgeAJgZQAKgbAXgTQATgOAWgEQgKgbAGgbQAHgfAbgWQAagWAfgBQAggBAcATQAcAUAKAfQAJAhgMAfQgHAUgPAPQgPAPgUAHIgOAEQAHAVgDAWQAdADAVASQAZAUAIAiQAHAhgNAeQgNAbgbAQQgYANgZAAIgIAAg");
	var mask_10_graphics_123 = new cjs.Graphics().p("AAjDuQgdgSgMgiIgBgFQgegCgYgUQgYgUgJgdQgFgTACgTIgEgBQgdgFgVgTQgVgTgHgcQgHgeAJgaQAKgbAXgTQATgOAWgEQgKgbAGgbQAHgfAbgWQAagWAggBQAfgBAcATQAcAUAKAfQAJAhgMAfQgHAUgPAPQgPAPgUAHIgOAEQAIAVgEAXQAdADAVARQAXASAIAdQAaADAXAQQAaASAKAcQAKAdgJAeQgIAfgYATQgXATggADIgIAAQgbAAgWgNg");
	var mask_10_graphics_124 = new cjs.Graphics().p("AAvEtQgagLgPgVQgPgWgCgcQgCgbALgYIAIgPQgHgLgFgOIgBgFQgegCgYgUQgYgUgJgdQgFgTACgTIgEgBQgdgFgVgSQgVgTgHgdQgHgeAJgaQAKgbAXgTQATgOAWgEQgKgbAGgbQAHgfAbgWQAagWAggBQAfgBAcATQAcAUAKAfQAJAhgMAfQgHAUgPAPQgPAPgUAHIgOAEQAIAVgEAXQAdADAVASQAXASAIAdQAaACAXAQQAaASAKAcQAKAdgJAeQgFASgKAOQARAXABAeQACAigRAaQgYAkgtAHIgMAAQgUAAgTgIg");
	var mask_10_graphics_125 = new cjs.Graphics().p("AgcFeQgVgNgNgXQgMgXAAgZQAAgnAagcQAQgRAWgIIgBgJQgCgbALgYIAIgPQgHgLgFgOIgBgFQgegCgYgUQgYgUgJgcQgFgTACgTIgEgBQgdgFgVgTQgVgTgHgdQgHgeAJgaQAKgbAXgTQATgOAWgEQgKgbAGgbQAHgfAbgWQAagWAggBQAfgBAcATQAcAUAKAfQAJAhgMAfQgHAUgPAPQgPAPgUAHIgOAEQAIAVgEAXQAdADAVASQAXASAIAdQAaACAXARQAaASAKAbQAKAdgJAeQgFASgKAOQARAXABAeQACAigRAaQgSAbgeALIAAADQAFAogVAeQgWAegnAIQgLACgLAAQgZAAgXgNg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_10_graphics_120,x:313.5182,y:283.2858}).wait(1).to({graphics:mask_10_graphics_121,x:309.8694,y:289.6983}).wait(1).to({graphics:mask_10_graphics_122,x:310.4435,y:295.1395}).wait(1).to({graphics:mask_10_graphics_123,x:314.7298,y:298.6149}).wait(1).to({graphics:mask_10_graphics_124,x:314.7298,y:304.4398}).wait(1).to({graphics:mask_10_graphics_125,x:314.7298,y:309.8389}).wait(15));

	// lady11
	this.instance_19 = new lib.CachedBmp_9();
	this.instance_19.setTransform(302.3,281.05,0.5,0.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120).to({_off:false},0).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(109,212.6,765.4,530.4);
// library properties:
lib.properties = {
	id: 'EA6820207E116449AD41F9415D076656',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/lady_atlas_1.png", id:"lady_atlas_1"}
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
an.compositions['EA6820207E116449AD41F9415D076656'] = {
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