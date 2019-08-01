
function github(theMessage){
	theMessage = theMessage.split(' ');

	let allPromises = Promise.all(
		theMessage.map(msg => Promise.resolve(msg))
		);
	
	allPromises.then(githubPromises => console.log(githubPromises.join(' ')));
}


github('GitHub is for everyone!');
