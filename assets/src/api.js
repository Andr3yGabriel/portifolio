

async function fetchProfileData() {
    const url = 'https://github.com/Andr3yGabriel/portifolio/blob/main/data/profile.json';
    const fetching = fetch(url);
    return await fetching.json();
}

