# Headless CMS with DENO

This is a project to test and do some work with Deno before using it in production and for future projects so I don't have to re-do all of this work just adapt it.

### About DENO

`deno` is a secure runtime for `javascript` and `typescript`. You can learn more about it in [Deno official site](https://deno.land).

## Tech behind it

-   `deno` runing with `typescript`
-   `denon` it works exactly like `nodemon` for node using `denon.json` as config file, there you specify the command to run and the permissions it needs
-   `oak` which is a middleware framework for `deno` inspired by [Koa](https://github.com/koajs/koa) and middleware router.
-   `denoenv` to read `.env` file for secure storage of sensitive data
-   `mongo_db` as the MongoDB client
-   `bcrypt` as and encrypter and matcher of passwords so the passwords can be stored in a secure way in the DB
-   Other plugins/services used are `.editorconfig` to specify the style and format of files and `.prettierrc` to confirm some styles that cannot be managed with editorconfig

-

#### Commands

-   **Dev Mode:** `denon start` which uses the `denon.json` config file

###### What it still needs

-   [ X ] Start server
-   [ X ] Create some default routes
-   [ X ] Create controller to manage the tasks for those routes
-   [ X ] Get data from POST calls
-   [ X ] Encrypt password on user creation
-   [ X ] Save user on db
-   [ ] Validate login data through another endpoint IS HALF WAY... just needs to return a valid json response with the errors and thats it.
-   [ ] Return user without passwords
-   [ ] Add JWT to the login functionality
-   [ ] On POST user Login match the password
-   [ ] Return JWT on user login
-   [ ] Create util to protect requests (if the requests isn't made with a valid JWT you cannot access those requests)
-   [ ] See how to upload images and files and manipulate them with IMAGEMAGIC
