

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Andr3yGabriel/portifolio/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}

