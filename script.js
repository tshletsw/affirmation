document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

const affirmations = [
  "You radiate so much love and positivity, and it will come back to you tenfold.",
  "Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid. - John 14:27",
  "With each dawn, I embrace the promise of new beginnings and the possibility of better days.",
  "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit. - Romans 15:13",
  "You bring joy to everyone around you.",
  "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows. - James 1:17",
  "I am resilient, and I know that every setback is a stepping stone toward the brighter future that awaits me.",
  "I am a crown of beauty and a royal diadem in the hand of the Lord. - Isaiah 62:3",
  "Times may be difficult, but it is a short phase of life. Things can get better. Things will get better.",
  "I am filled with joy because Christ is my strength. - Nehemiah 8:10",
  "When I come across scriptures referencing how humanity is made in the image of God, I can't help but think of you.",
  "I am not forsaken. I am accepted by Christ. - Psalm 94:14",
  "I am a magnet for positivity and opportunity, attracting the blessings of better days into my life.",
  "I am no longer a slave to fear. - Isaiah 41:10",
  "Any one who has had the privilege of knowing you, I count amongst the most blessed humans to cross this earth. You are amazing",
  "I am made in God’s image. - Genesis 1:27",
  "You possess a unique blend of wisdom and compassion that touches the souls of those around you.",
  "I am sealed with the Holy Spirit of promise. - Ephesians 1:13",
  "I envision a future filled with love, prosperity, and fulfillment, and I trust that better days are manifesting for me even now.",
  "I am seated in heavenly places with Christ. - Ephesians 2:6",
  "Your journey is a testament to your resilience and inner strength, and will guide others to find their own courage, so you can't give up now",
  "I am a branch of the one and only vine. - John 15:1",
  "In your presence, I feel the embrace of authenticity and vulnerability, reminding me of the beauty in imperfection.",
  "I am the salt and light of the world. I am a city on a hill and cannot be hidden. - Matthew 5:13",
  "Your empathy and understanding create a safe space for others to express their true selves without fear of judgment.",
  "The LORD who created you says, “Do not be afraid–I will save you. I have called you by name–you are mine",
  "You carry within you the seeds of transformation, nurturing growth and renewal in the lives you touch.",
  "You are a capable human.",
  "Your presence in this world makes a difference.",
  "You are worthy of love and respect.",
  "You have the strength to overcome any challenge.",
  "You are a beautiful person, inside and out.",
  "You have a unique purpose that only you can fulfill.",
  "Your dreams are valid and achievable.",
  "You are enough just as you are.",
  "You deserve all the good things life has to offer.",
  "You are capable of achieving greatness.",
  "Your heart is full of love and kindness.",
  "You are a source of inspiration to others.",
  "You are strong, resilient, and capable of handling whatever comes your way.",
  "Your potential is limitless.",
  "You have the power to create positive change.",
  "You are deserving of happiness and success.",
  "You are a shining light in the lives of those around you.",
  "You are a beautiful reflection of love and grace.",
  "You have the courage to follow your dreams.",
  "You are a valuable and cherished individual.",
  "You are deserving of all the love and joy life has to offer.",
  "You are a beacon of hope and positivity.",
  "You are capable of achieving all your goals.",
  "You are a wonderful person with a lot to offer.",
  "You are a force for good in the world.",
  "You are worthy of all the best things in life.",
  "You have the strength and resilience to overcome any obstacle.",
  "You are a beautiful and unique individual.",
  "You are deserving of all the love and kindness you receive.",
  "You are a powerful and influential person.",
  "You have the ability to create your own happiness.",
  "You are a positive influence on those around you.",
  "You are full of potential and possibilities.",
  "You are loved and appreciated more than you know.",
  "You are a source of strength and inspiration.",
  "You have the power to make a difference in the world.",
  "You are deserving of all the success and joy that comes your way.",
  "You are a beautiful and extraordinary person.",
  "You have the ability to achieve your dreams and goals.",
  "You are a unique and valuable individual.",
  "You are worthy of all the blessings life has to offer.",
  "You are a shining example of love and kindness.",
  "You have the strength to face any challenge that comes your way.",
  "You are deserving of all the good things that come your way.",
  "You are a beautiful reflection of love and light.",
  "You are capable of achieving anything you set your mind to.",
  "You are a cherished and valued individual.",
  "You have the power to create positive change in your life.",
  "You are deserving of all the love and happiness in the world.",
  "You are a source of inspiration and hope to others.",
  "You are a beautiful and unique person with much to offer.",
  "You are worthy of all the success and joy that comes your way.",
  "You are a shining light in the world.",
  "You have the strength and courage to overcome any challenge.",
  "You are deserving of all the best things in life.",
  "You are a beautiful and extraordinary person.",
  "You are capable of achieving greatness.",
  "You are a unique and valuable individual with much to offer.",
  "You are deserving of all the love and joy in the world.",
  "You are a source of inspiration and positivity.",
  "You are a beautiful reflection of love and grace.",
  "You have the power to create your own happiness.",
  "You are worthy of all the blessings life has to offer.",
  "You are a cherished and valued individual.",
  "You have the strength and resilience to overcome any obstacle.",
  "You are deserving of all the love and kindness you receive.",
  "You are a beautiful and unique person with much to offer.",
  "You are a shining example of love and light.",
  "You have the ability to achieve your dreams and goals.",
  "You are a positive influence on those around you.",
  "You are a source of strength and inspiration.",
  "You are deserving of all the success and joy that comes your way.",
  "You are a beautiful and extraordinary person."
];

function fetchAffirmation() {
  try {
    console.log('Fetching affirmation...');
    // Randomly select an affirmation
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];

    // Display the affirmation
    document.getElementById('affirmation').textContent = affirmation;
  } catch (error) {
    console.error('Error fetching affirmation:', error);
    document.getElementById('affirmation').textContent = "Oops, couldn't fetch an affirmation right now. Please try again later!";
  }
}
