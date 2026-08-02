import app from "./app";
import config from "./src/config/config";

app.listen(config.app.port, () => {
  console.log(`server listening on port ${config.app.port}`);
});
