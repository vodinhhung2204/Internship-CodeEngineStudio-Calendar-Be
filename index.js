// Lauch app
const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
