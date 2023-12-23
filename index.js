require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

//json data & link is https://api.github.com/users/dhruvik-rk
const githubData = {
    "login": "dhruvik-rk",
    "id": 118800809,
    "node_id": "U_kgDOBxTBqQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/118800809?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dhruvik-rk",
    "html_url": "https://github.com/dhruvik-rk",
    "followers_url": "https://api.github.com/users/dhruvik-rk/followers",
    "following_url": "https://api.github.com/users/dhruvik-rk/following{/other_user}",
    "gists_url": "https://api.github.com/users/dhruvik-rk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dhruvik-rk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dhruvik-rk/subscriptions",
    "organizations_url": "https://api.github.com/users/dhruvik-rk/orgs",
    "repos_url": "https://api.github.com/users/dhruvik-rk/repos",
    "events_url": "https://api.github.com/users/dhruvik-rk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dhruvik-rk/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2022-11-22T07:38:42Z",
    "updated_at": "2022-12-29T13:06:03Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('User World!')
})

//work with json data
app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})