const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const rootDirectory = require("./utils/path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const setupDB = require("./utils/syncData");
const sequelize = require("sequelize");
const db = require("./utils/database");
const csrf = require("csurf");
const errorController = require("./controllers/error");
const userController = require("./controllers/user");
const cartController = require("./controllers/cart");
const authController = require("./controllers/auth");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
require("dotenv").config();

// csrf protects against fake site attacks. Creating a new instance of csrf protection middleware
const csrfProtection = csrf();

// Creating a session store with Sequelize
const sequelizeSessionStore = new SequelizeStore({ db: db });

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "OPTIONS"],
    preflightContinue: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initiating session with secret from ENV file, resave/saveuninitiatied false => only saves session when something is modified
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

// app.use(csrfProtection);

// sequelize automatically creates the session database/table for you with sync()
sequelizeSessionStore.sync();
// filter routes localhost:3001/admin/(routes in adminRoutes)
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/users", userRoutes);
// Error handling Catch all routes
app.use(errorController.get404Error);

app.get("/", (req, res) => {
  // next() finishes the first middleware then runs the second middleware
  // next();
  res.sendFile(path.join(rootDirectory, "public", "index.html"));
});

app.listen(PORT, () => {
  setupDB();
  console.log(`Running on server: ${PORT}`);
});
