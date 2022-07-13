Anonymity Forumn
So this project idea has taken many different turns. Initially the idea was for it to be an anonymous, "safe space" for people to share their experiences in relationships whether romantic or platonic. As I began working on the project, I thought it would be a cool idea for it to be an anonymous space for people to share positive notes and affirmations.

Link to project: https://anonforumn.netlify.app/

alt tag

How It's Made:
Tech used: React, NodeJS, MongoDB, Axios, and Express

For this project I began with the frontend, giving the user a place to provide input or make a new post. From there I moved to the backend to receive the data and store it into an API so that it can be fetched and displayed on the "home" screen. This was my first time using Axios on a full stack application and I really enjoyed it's ease of use. MongoDB has been difficult for me to navigate but for this project I began with Mongo Compass to store data in a local database before moving it to the cloud when I deployed.

Lessons Learned:
For me the biggest "aha!" moment of this project was figuring out a way to give the user a way to delete their post only after creating it. It would've been much simpler to have it where any/all of the posts could've been deleted at any time but I didn't want this. In order to accomplish my goal, I had to figure out a way to identify which post was just created and provide a "delete" button for that post only. The easiest way to do this was to id the post by its "key" that's provided by MongoDB. Although this isn't the most effective at this moment, because if the page is refreshed, the post can no longer be deleted.

Planned Optimizations:
A way to fix the issue of no longer being able to delete the post after the page is refreshed, is to store the "key" value to local storage.

Getting Started:
To launch this project locally, after forked and cloned, run "npm init", then "npm start" for React, and "node index.js" for the server (NodeJS).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
