

async function fetchProfileData() {
    const url = 'https://github.com/Andr3yGabriel/portifolio/main/data/profile.json';
    const fetching = fetch(url);
    return await fetching.json();
}

