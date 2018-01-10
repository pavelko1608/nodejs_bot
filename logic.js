module.exports = {
	num_of_week: function(date) {
	  if(date.getTime() >= 1515974400000 && date.getTime() < 1516579200000) {
	    return "week 1"
	  } else if(date.getTime() >= 1516579200000 && date.getTime() < 1517184000000) {
	    return "week 2"
	  } else if(date.getTime() >= 1517184000000 && date.getTime() < 1517788800000) {
	    return "week 3"
	  } else if(date.getTime() >= 1517788800000 && date.getTime() < 1518393600000) {
	    return "week 4"
	  } else if(date.getTime() >= 1518393600000 && date.getTime() < 1518998400000) {
	    return "week 5"
	  } else if(date.getTime() >= 1518998400000 && date.getTime() < 1519603200000) {
	    return "week 6"
	  } else if(date.getTime() >= 1519603200000 && date.getTime() < 1520208000000) {
	    return "week 7"
	  } else if(date.getTime() >= 1520208000000 && date.getTime() < 1520812800000) {
	    return "week 8"
	  } else if(date.getTime() >= 1520812800000 && date.getTime() < 1521417600000) {
	    return "week 9"
	  } else if(date.getTime() >= 1521417600000 && date.getTime() < 1522022400000) {
	    return "week 10"
	  } else if(date.getTime() >= 1522022400000 && date.getTime() < 1522627200000) {
	    return "week 10"
	  } else if(date.getTime() >= 1522627200000 && date.getTime() < 1523232000000) {
	    return "week 10"
	  } else if(date.getTime() >= 1523232000000 && date.getTime() < 1523836800000) {
	    return "week 10"
	  } else if(date.getTime() >= 1523836800000 && date.getTime() < 1524441600000) {
	    return "week 10"
	  } else if(date.getTime() >= 1524441600000 && date.getTime() < 1525046400000) {
	    return "week 10"
	  }
	  else {
	  	return "You're in a different dimension pal, go have some rest and when the time comes text me again"
	  }
	}
}