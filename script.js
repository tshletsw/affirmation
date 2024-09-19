document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

async function fetchAffirmation() {
  try {
    console.log('Fetching affirmation...');
    const response = await fetch('https://www.affirmations.dev/');
    const data = await response.json();
    console.log('Affirmation Data:', data);

    // Ensure we have the correct response structure
    if (data && data.affirmation) {
      document.getElementById('affirmation').textContent = data.affirmation;
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error fetching affirmation:', error);
    document.getElementById('affirmation').textContent = "Oops, couldn't fetch an affirmation right now. Please try again later!";
  }
}
