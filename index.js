const express = require('express');
const dotenv = require('dotenv');
const UserRouter = require('./routers/user.route');
const ServiceRouter = require('./routers/service.route');
const UserVerificationRouter = require('./routers/user.Verification.route');
const UserConsultationRouter = require('./routers/user.consultation.route');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./utils/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
// here we use json method of express js to parse json data from user to req.body
// bcrypt is a library to hash password
// jsonwebtoken is a library to create token
// express-async-handler is a library to handle async function
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();


app.get('/', (req, res) => {
    res.send("Server is running");
});

// api for users
app.use("/api/users", UserRouter);
// api for service
app.use("/api/services", ServiceRouter)
app.use("/api/userVerificationProcess", UserVerificationRouter);
app.use("/api/userConsultation", UserConsultationRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});