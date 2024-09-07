

async function fetchProfileData() {
    const url = 'https://github.com/Andr3yGabriel/portifolio/blob/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}

