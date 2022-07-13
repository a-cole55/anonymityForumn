Anonymity Forumn
So this project idea has taken many different turns. Initially the idea was for it to be an anonymous, "safe space" for people to share their experiences in relationships whether romantic or platonic. As I began working on the project, I thought it would be a cool idea for it to be an anonymous space for people to share positive notes and affirmations.

Link to project: https://anonforumn.netlify.app/

![anonymity](https://user-images.githubusercontent.com/94746691/178742135-fb67e134-6682-4451-910f-2b1ca37e2cd1.png)


How It's Made:
Tech used: React, NodeJS, MongoDB, Axios, and Express

For this project I began with the frontend, giving the user a place to provide input or make a new post. From there I moved to the backend to receive the data and store it into an API so that it can be fetched and displayed on the "home" screen. This was my first time using Axios on a full stack application and I really enjoyed it's ease of use. MongoDB has been difficult for me to navigate but for this project I began with Mongo Compass to store data in a local database before moving it to the cloud when I deployed.

Lessons Learned:
For me the biggest "aha!" moment of this project was figuring out a way to give the user a way to delete their post only after creating it. It would've been much simpler to have it where any/all of the posts could've been deleted at any time but I didn't want this. In order to accomplish my goal, I had to figure out a way to identify which post was just created and provide a "delete" button for that post only. The easiest way to do this was to id the post by its "key" that's provided by MongoDB. Although this isn't the most effective at this moment, because if the page is refreshed, the post can no longer be deleted.

Planned Optimizations:
A way to fix the issue of no longer being able to delete the post after the page is refreshed, is to store the "key" value to local storage.

Getting Started:
To launch this project locally, after forked and cloned, run "npm init", then "npm start" for React, and "node index.js" for the server (NodeJS).
