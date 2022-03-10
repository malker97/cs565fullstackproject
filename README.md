# cs565fullstackproject

## Deployed website

https://young-haze-4761.on.fleek.co/

### What is our app?

Our app will manage user's task information by getting task information from
user and then add then to bacnend then return it back to task list page.

### How to run our app?

cd into `src/frontend/my-app`

Create a `.env` file in my-app dictionary, and put
`REACT_APP_GCAL_API_KEY=REPLACE_THIS_WITH_YOUR_OWN_GOOGLE_API_KEY` in it.

Create a `.env` file in my-app/backend dictionary, and put

```
DBUSERNAME=
DBPASSWORD=
```

in it.

You'll need to run `npm install` in both `src/frontend/my-app/backend` and
`src/frontend/my-app` before running the app.

Then navigate to `src/frontend/my-app` and enter:

`npm start` to run this app

### What is a user name I could use to test?

`test1` this is one of the user id that could be use to test. How this work is
to enter this user id in home page and click submit, then the page will auto
direct to task page.

#### Here is some other user name you could use. You could also test out with random name, that will create a new user. Have fun :)

```
test1
test2
test3
test4
new user
New
NonExistantUser
```

### Steps to use our app

Our app will start you at Home page, then you will need to enter a user id we
provide above if you would like to browse existing user example. After clicking
on submit, the page will be redirect to task list page to show you a list of
tasks of this user.

If you click on Task list page without first submit a valid user id, then there
will be no data shows up.
