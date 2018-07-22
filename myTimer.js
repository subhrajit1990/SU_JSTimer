
if (typeof (SUBU) == "undefined") {
    SUBU = {}
}

SUBU.My_Timer = new function(){
	this.init = function(){
		var counter;
		counter = new timerCounter();
		counter.init("timer", 180); // expects in seconds
	}
}

su_timer = SUBU.My_Timer;
