const express = require('express')

require('dotenv').config()

const app = express()
const port = 4000

const githubData = {
    
  "login": "Akash102938",
  "id": 153708728,
  "node_id": "U_kgDOCSlouA",
  "avatar_url": "https://avatars.githubusercontent.com/u/153708728?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Akash102938",
  "html_url": "https://github.com/Akash102938",
  "followers_url": "https://api.github.com/users/Akash102938/followers",
  "following_url": "https://api.github.com/users/Akash102938/following{/other_user}",
  "gists_url": "https://api.github.com/users/Akash102938/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Akash102938/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Akash102938/subscriptions",
  "organizations_url": "https://api.github.com/users/Akash102938/orgs",
  "repos_url": "https://api.github.com/users/Akash102938/repos",
  "events_url": "https://api.github.com/users/Akash102938/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Akash102938/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Akash Kumar Pandey",
  "company": "Generix Infotech",
  "blog": "",
  "location": "Jamshedpur Jharkhand",
  "email": null,
  "hireable": null,
  "bio": "Enthusiastic and detail-oriented frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.js. ",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-12-13T06:19:53Z",
  "updated_at": "2025-08-30T17:04:58Z"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hello ji')
})
app.get('/login', (req,res) =>{
    res.send('<h1>Please login in my App</h1>')
})
app.get('/youtube', (req,res)=>{
    res.send('please subscribe my youtube channel')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

