const updatePlayerResult = (
    player {
        id,
        firstName,
        lastName,
        playerStats{careerStats{passingStats{attempts,completeions},rushingStats{attpempts,yardsPerAttempt}}}
    }
) => {
    console.log(player);
};


const requestPlayerByName = (firstName, lastName) => {
    const baseURL = 'https://api.nfl.com/v1/persons?fs={id,firstName,lastName,playerStats{careerStats{passingStats{attempts,completeions},rushingStats{attpempts,yardsPerAttempt}}}}&s='
    const baseQuery = `{"$query":{"firstName" : "${firstName}","lastName" : "${lastName}"}})`
    const xhr = new XMLHttpRequest;
    xhr.onreadystatechange = (r) => {
        updatePlayerResut(r);
    };
    xhr.open('GET', `${baseURL}+${baseQuery}`);
    xhr.send();
}