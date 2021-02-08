const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArgs => {
    profileDataArgs.forEach(profileItem => {
        console.log(profileItem);
    })
    console.log('============');
};

printProfileData(profileDataArgs);