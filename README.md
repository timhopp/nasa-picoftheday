# NASA Photo of The Day App

This application utilizes NASA's photo of the day API to display the current picture of the day. Users can pick any past photo of the day by utilizing the Moment.js datepicker, or choose the previous or next day compared to the current date selected. Users can save photos to favorites, access the full details of each favorite via a modal, and delete favorites. 

The app is written in Typescript, using React, Redux, and Bootstrap to create the frontend. The backend utilizes Node.js, Express, and a MongoDB database. For the Redux store, I chose to use the Redux-Toolkit, which uses the Immer library to write simpler immutable code and reduce the boilerplate significantly.

Auth0 is integrated, allowing a user to access their favorites once they are logged in. This provides the security and flexibility of an API and database, and provides a scalable solution to create a larger application. 
