const playerOutput = () => {
    console.log(this.responseText);
}

const requestPlayerByName = (firstName, lastName) => {
    const baseURL = 'https://api.nfl.com/v1/persons?fs={id,firstName,lastName,playerStats{careerStats{passingStats{attempts,completeions},rushingStats{attpempts,yardsPerAttempt}}}}&s='
    const baseQuery = `{"$query":{"firstName" : "${firstName}","lastName" : "${lastName}"}})`
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', playerOutput);
    xhr.open('GET', `${baseURL}${baseQuery}`);
    xhr.send();
}

requestPlayerByName('Tom', 'Brady');