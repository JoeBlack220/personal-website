# personal-website
## Current Tech Stack
- Language: Typescript
- Server: Express
- Database: MongoDB
- template: EJS
## Current Functionality
- create, edit and delete markdown based text blog
## How to run?
- start mongodb
- npm start
- go to localhost:8080
## TODOs
- Detach the frontend from the backend
- Add styles to the webpage using semantic UI and bootstrap
- User management
- Picutre uploading
- Convert template engine to React
- Need to fix Chinese title issue
- Multiple kinds of layout of blogs
- Layout adjustable for mobile devices
# developer's log
- 07/07/2020: Created basic blog functionalities. Create, edit and delete markdown based text blog
- 07/08/2020: Modified all the code to decorator style
- 07/09/2020: Added some safety-related dependencies to the server, error handlings for non-existing routes
- 07/10/2020: Adjust to environmentally configurable
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




