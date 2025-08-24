const express = require('express');

const app = express();
const port = 3000; //server listens in port

const githubData = {
  "login": "gargieesingh",
  "id": 185353530,
  "node_id": "U_kgDOCwxFOg",
  "avatar_url": "https://avatars.githubusercontent.com/u/185353530?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gargieesingh",
  "html_url": "https://github.com/gargieesingh",
  "followers_url": "https://api.github.com/users/gargieesingh/followers",
  "following_url": "https://api.github.com/users/gargieesingh/following{/other_user}",
  "gists_url": "https://api.github.com/users/gargieesingh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gargieesingh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gargieesingh/subscriptions",
  "organizations_url": "https://api.github.com/users/gargieesingh/orgs",
  "repos_url": "https://api.github.com/users/gargieesingh/repos",
  "events_url": "https://api.github.com/users/gargieesingh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gargieesingh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gargie",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 4,
  "following": 2,
  "created_at": "2024-10-17T09:55:10Z",
  "updated_at": "2025-08-19T17:45:46Z"
}

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.get('/twitter', (req, res)=>{
    res.send('gargieesingh');
})

app.get('/login',(req, res)=>{
    res.send('<h1>Please login here.</h1>');
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>Youtube written</h2>")
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})

app.get('/github/gargieesingh', (req, res)=>{
    res.json(githubData);
})
