let user = {
    hobby = Calligrapgy,
    favoriteSport = Hockey,
    astrologicalSign = Aries,
    firstName = Billlaume,
    lastName = Ialva,
    location = Telaviv,
    occupation = Engineer,
};
    logWelcomeUser(WelcomeString){
        console.log(WelcomeString + ', ' + this.firstName + '. Your Occupation is:' + this.occupation);
    }
let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
 

