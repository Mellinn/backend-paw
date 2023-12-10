const express = require("express");

const app = express();

const dbConfig = require("./dbmongose");

const adminsRoute = require("./routes/adminsRoute");
const driversRoute = require("./routes/driversRoute");
const pelanggansRoute = require("./routes/pelanggansRoute");
const ordersRoute = require("./routes/ordersRoutes");
const testRoute = require("./routes/testRoute");

app.use(express.json());

app.use("/api/admins", adminsRoute);
app.use("/api/drivers", driversRoute);
app.use("/api/pelanggans", pelanggansRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/test", testRoute);

app.listen(3000, () => {
  console.log("Server uinjek is running on port 3000");
});
