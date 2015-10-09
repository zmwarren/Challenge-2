exports.Shape = function() {

}

exports.Shape2d = function(name, color){
	this.getColor = function(){
		return color;
	}
}
//Voodoo Magic to make Shape2d inherit from Shape
exports.Shape2d.prototype = Object.create(exports.Shape.prototype);




exports.Circle = function(name, color, radius){
	this.getColor = function(){
		return color;
	}
	this.getRadius = function(){
		return radius;
	}
	this.getDiameter = function(){
		return radius * 2;
	}
	this.getArea = function(){
		return Math.PI * radius * 2;
	}
}
//Voodoo Magic to make Circle inherit from Shape2d

exports.Circle.prototype = Object.create(exports.Shape2d.prototype);


exports.Shape3d = function(){
	
}
//Voodoo Magic to make Shape3d inherit from Shape
exports.Shape3d.prototype = Object.create(exports.Shape.prototype);

exports.Cube = function(name, color, radius){
	this.getColor = function(){
			return color;
		}
	this.getVolume = function(){
		return radius*radius*radius;
	}
}
//Voodoo Magic to make Cube inherit from Shape3d
exports.Cube.prototype = Object.create(exports.Shape3d.prototype);





