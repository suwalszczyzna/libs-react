
# Daemon's libs
![app logo](/public/logo192.png)

Side-project on my React learning path. It's a simple app for storage interesting resources found somewhere on the Internet

# Working demo
Deployed on Netlify: [daemon-libs.netlify.app](https://daemon-libs.netlify.app/)

# Screenshots
![App screenshots](/screenshots/daemons_libs_screenshots.png)

# Features
* nice design 😺
* Based on [create-react-app](https://pl.reactjs.org/docs/create-a-new-react-app.html)
* atomic design
* custom hooks
* __infinity scroll__ made with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
* __debounce__ in form, reduces api calls
* __custom backend__, made with Python and DRF: [libs-django](https://github.com/suwalszczyzna/libs-django)
* self filling form. The app will call API and get title and favicon just right after you paste URL

# Quick install

1. `npm install` to install dependencies
2. Backend API: you can use my API deployed on heroku ( https://libs-django.herokuapp.com/api/ ) or clone my [Python backend app](https://github.com/suwalszczyzna/libs-django) and run it on your own
3. Export necessary env variables:  
    ```
    REACT_APP_API_BACKEND_URL = "https://libs-django.herokuapp.com/api/"
    ```
4. `npm run` to run the app
   