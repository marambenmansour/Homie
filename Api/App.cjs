require('dotenv').config();
const express = require('express');
const UserRouterLogin = require('./roots/Authroot.cjs');
const UserRouterRegister = require('./roots/Userroot.cjs');
const UserRouterProfile = require('./roots/profileRoutes.cjs');
const UserRouterPublication = require('./roots/PubRoot.cjs');

const app = express();
const PORT = process.env.PORT || 4001; // Define the port

// Middleware
app.use(express.json());

// Mounting routers
app.use(UserRouterLogin);
app.use(UserRouterRegister);
app.use(UserRouterProfile);
app.use(UserRouterPublication);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
