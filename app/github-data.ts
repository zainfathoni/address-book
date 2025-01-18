export async function getGithubUser(username?: string) {
  // Simulate a slow network request, since GitHub's API is fast.
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}
