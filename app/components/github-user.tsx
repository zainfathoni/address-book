import { use } from "react";

/**
 * {
  "login": "zainfathoni",
  "id": 6315466,
  "node_id": "MDQ6VXNlcjYzMTU0NjY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/6315466?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/zainfathoni",
  "html_url": "https://github.com/zainfathoni",
  "followers_url": "https://api.github.com/users/zainfathoni/followers",
  "following_url": "https://api.github.com/users/zainfathoni/following{/other_user}",
  "gists_url": "https://api.github.com/users/zainfathoni/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/zainfathoni/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/zainfathoni/subscriptions",
  "organizations_url": "https://api.github.com/users/zainfathoni/orgs",
  "repos_url": "https://api.github.com/users/zainfathoni/repos",
  "events_url": "https://api.github.com/users/zainfathoni/events{/privacy}",
  "received_events_url": "https://api.github.com/users/zainfathoni/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Zain Fathoni",
  "company": "Relay Commerce",
  "blog": "https://zainf.dev",
  "location": "Indonesia",
  "email": null,
  "hireable": true,
  "bio": "A family man with enthusiasm for web technologies. I am currently enjoying a digital nomad life with my family. 🚙",
  "twitter_username": "zainfathoni",
  "public_repos": 224,
  "public_gists": 29,
  "followers": 916,
  "following": 225,
  "created_at": "2014-01-04T02:37:33Z",
  "updated_at": "2025-01-10T14:27:26Z"
}
 */
type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export default function GitHubUser({
  username,
  data,
}: {
  username?: string;
  data: Promise<GitHubUser>;
}) {
  const user = use(data);
  if (!user.login) {
    return (
      <div>
        GitHub user with <code>{username}</code> username not found.
      </div>
    );
  }
  return (
    <div>
      <dt>Company</dt>
      <dd>{user.company}</dd>
      <dt>Location</dt>
      <dd>{user.location}</dd>
      <dt>Bio</dt>
      <dd>{user.bio}</dd>
      <dt>Website</dt>
      <dd>
        <a href={user.blog} target="_blank" rel="noopener noreferrer">
          {user.blog}
        </a>
      </dd>
      <dt>Public Repos</dt>
      <dd>{user.public_repos}</dd>
      <dt>Followers</dt>
      <dd>{user.followers}</dd>
      <dt>Following</dt>
      <dd>{user.following}</dd>
    </div>
  );
}
