timerCounter = function() {
	var self = this;
	this.seconds = 0;
	this.count = 0;
	this.degrees = 0;
	this.interval = null;
	this.timerContainer = null;
	this.number = null;
	this.slice = null;
	this.pie = null;
	this.pieRight = null;
	this.pieLeft = null;
	this.quarter = null;
	this.timerHTML = "<div class='num'></div><div class='slice'><div class='quater'></div><div class='pie right'></div><div class='pie left'></div></div>";
	

	this.init = function(e, s) {
		self.timerContainer = $("#" + e);
		self.timerContainer.html(self.timerHTML);		
		self.number = self.timerContainer.find(".num");
		self.slice = self.timerContainer.find(".slice");
		self.pie = self.timerContainer.find(".pie");
		self.pieRight = self.timerContainer.find(".pie.right");
		self.pieLeft = self.timerContainer.find(".pie.left");
		self.quarter = self.timerContainer.find(".quater");
		self.start(s);
	}

	this.start = function(val) {
		self.seconds = val;
		self.interval = window.setInterval(function () {
		mins = Math.floor((self.count)/60);
		secs = (self.count) % 60;
		console.log("mins "+mins + " secs "+secs);
		var time = mins+":"+secs;
			self.number.html(time);
			self.count++;

			if (self.count > (self.seconds - 1)) clearInterval(self.interval);

			self.degrees = self.degrees + (360 / self.seconds);
			if (self.count >= (self.seconds / 2)) {
				self.slice.addClass("nc");
				if (!self.slice.hasClass("calculated")) self.pieRight.css({"transform":"rotate(180deg)"});
				self.pieLeft.css({"transform":"rotate(" + self.degrees + "deg)"});
				self.slice.addClass("calculated");
				if (self.count >= (self.seconds * 0.75)) self.quarter.remove();
			} else {
				self.pie.css({"transform":"rotate(" + self.degrees + "deg)"});
			}
		}, 1000);
	}
}

