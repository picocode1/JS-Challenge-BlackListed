function blackListed(argument){
	if (typeof argument == 'string'){
		return Number(argument)
	}
	else
	{
		return String(argument)
	}
}
