/* 1. Configuration object */
// TODO: Create an SAFE NON MUTABLE object with BASE_URL and MAX_REPOS_TO_SHOW inside
// - BASE_URL: should be "https://api.github.com/users"
// - MAX_REPOS_TO_SHOW: number of repos to display (e.g., 10)

const CONFIG = {};

/* 2. DOM Elements - Get all necessary HTML elements */
// TODO: Get these elements using getElementById:

// - searchInput
// - searchButton
// - userInfoDiv
// - reposList
// - totalStarsDiv
// - errorDiv

/* 3. API Calls */

// TODO: Create async function fetchGitHubUser that fetches user data
// TODO:
// - Fetch user data from API
// - Handle errors if user not found
// - Return json data

// TODO: Create async function fetchUserRepos that fetches repositories
// - Fetch repos from API
// - Handle errors if repos not found
// - Return json data

/* 4. Data Processing */

// TODO: Create function getFilteredRepos to filter and process repositories
// - Filter repos with stars > 0
// - Take only MAX_REPOS_TO_SHOW repos
// - Return filtered repos

// TODO: Create function getTotalStars to calculate total stars
// - Use reduce to sum all stars
// - Return total

/* 5. Display Functions */

// TODO: Create function displayUserInfo to show user information
// - Handle null values with ?? and ||
// - Create HTML with user info
// - Update userInfoDiv

// TODO: Create function displayUserRepos to show repositories
// TODO:
// - Use map to create HTML for each repo
// - Handle null values
// - Update reposList

// TODO: Create function displayTotalStars to show total stars
// - Create HTML with total stars
// - Update totalStarsDiv

/* 6. Event Handler */
// Add click event listener for search button
searchButton.addEventListener("click", async () => {
  // - Get username from input
  // - Fetch user and repos
  // - Process data
  // - Display everything
  // - Handle errors
});
