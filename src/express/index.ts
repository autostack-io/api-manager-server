import express from "express";
import middlewares from "./middlewares";
import routes from "./routes";

export default async () => {
  const app = express();

  await Promise.all([
    middlewares(app),
    routes(app),
  ]);

  if (process.env.MANAGEMENT_PORT) {
    app.listen(process.env.MANAGEMENT_PORT, () => {
      console.log(`Management Server listen on port: ${process.env.MANAGEMENT_PORT}`);
    });
  } else {
    throw new Error("MANAGEMENT_PORT environment is empty.");
  }
};

/*

{
  "service1": [
    "10.0.1.1:8080",
    "10.0.1.2:8080",
    "10.0.1.3:8080",
    "10.0.1.4:8080",
    "10.0.1.5:8080",
  ],
  "service2": [
    "10.0.2.1:8080",
    "10.0.2.2:8080",
    "10.0.2.3:8080",
    "10.0.2.4:8080",
    "10.0.2.5:8080",
  ],
}

*/
