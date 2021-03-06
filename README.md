# personal-website
## Current Tech Stack
- Language: Typescript
- Server: Express
- Database: MongoDB
- Frontend: React + React Hook + Redux
- OAuth: Passport.js + express
## Current Functionality
- create, edit and delete markdown based text blog
- signup, signin using JWT
## How to run?
- start mongodb
- npm start -> start backend
- cd ./client
- npm start -> start frontend
## TODOs
- Add styles to the webpage using semantic UI and bootstrap
- User management
- Picutre uploading (just using third-party provider?)
- Multiple kinds of layout of blogs
- Layout adjustable for mobile devices
- Use react class based components first then migrate to react hooks style
- Fix date representation on the frontend side
- understand dumpurify
- Add tests for backend server
- Error handlings on the front end side.
- Add Refresh token in JWT
# developer's log
- 07/07/2020: Created basic blog functionalities. Create, edit and delete markdown based text blog
- 07/08/2020: Modified all the code to decorator style
- 07/09/2020: Added some safety-related dependencies to the server, error handlings for non-existing routes
- 07/10/2020: Adjust to environmentally configurable
- 07/11/2020: Convert backend server to a pure json server
- 07/12/2020: Changed routing to react route. Fixed Chinese title issues. Handled all requests in react. Now the markdown blog works exactly the same as EJS version. Deleted all EJS templates.
- 07/15/2020: Add example code for redux. Add buttons and dependencies for OAuth system.
- 07/17/2020: Add local login in and log out service on the backend side.
- 07/22/2020: Add JWT for authorizing instead of session.
# new blog model
- Title - Text Required
- Description - Text
- Comments - Text[]
- Content - Text Required
- Image - Text - URL
- Created At - Date Time (mongoose will created it for me)
- Updated At - Date Time (mongoose will created it for me)
- Visit times (may not be shown before it goes big, haha)
- Tags - Text[]
## Archived Todos
- Convert code to oop styles
- Add resuablity
- Add decorator style
- Environment configurable
- Turn backend to a pure json server
- Chinese title issue(related to slugify)
- Convert template engine to React
- Handling routing in react
- add scalffolding for redux
- Add JWT to passport to handle OAuth better




