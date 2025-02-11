# GitHub API Documentation for Profile Finder

## API Endpoints

1. Get User Information:

   - URL: `https://api.github.com/users/{username}`
   - Example: `https://api.github.com/users/microsoft`

2. Get User Repositories:
   - URL: `https://api.github.com/users/{username}/repos`
   - Example: `https://api.github.com/users/microsoft/repos`

## Important User Properties

When fetching user data, you'll get these properties:

- `login`: Username
- `name`: Full name (can be null)
- `bio`: User biography (can be null)
- `public_repos`: Number of public repositories
- `followers`: Number of followers
- `following`: Number of users they follow

## Repository Properties

When fetching repositories, each repo has these properties:

- `name`: Repository name
- `description`: Repository description (can be null)
- `stargazers_count`: Number of stars
- `language`: Main programming language (can be null)
