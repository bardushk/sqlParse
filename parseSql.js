var getSqlColumns = function(sqlString){
	var result = [],
		pattern = /select\s+(.*?)\s+from/gi,
		match = pattern.exec(sqlString),
		columns = match[1].split(/\s*,\s/),
		columnPattren = /(?:(?:.*\.)?(\S+)\s+)?(\S+)/;
	
	columns.forEach(function(item){
		var current = columnPattren.exec(item);
		result.push(current[2]);		
	});
		
	return result;
}

var getParams = function(sqlString){
	var pattern = /\s*:(\S+\d)/gi,
		match,
		result = [];
	while( match = pattern.exec(sqlString)){
		result.push(match[1]);
	}
	return result;
}

var sqlString = 'select o.No o_No, fooo aha, bar.too bar_too, p1 from dual where bar =:p0 and :p1 HH:MM:SS';
console.log(getSqlColumns(sqlString));
console.log(getParams(sqlString));