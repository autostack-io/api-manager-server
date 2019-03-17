import express from "express";

export default async () => {
  const app = express();
  //

  if (process.env.PROXY_PORT) {
    app.listen(process.env.PROXY_PORT, () => {
      console.log(`Proxy Server listen on port: ${process.env.PROXY_PORT}`);
    });
  } else {
    throw new Error("PROXY_PORT environment is empty.");
  }
};

/*
app.use("/controller", proxy({
  target: "http://localhost:8000/api/",
  changeOrigin: true,
}));

app.use("/dashboard", proxy({
  target: "http://localhost:8000/api/",
  changeOrigin: true,
}));

const controller = new models.Service({
    name: "controller",
    dest: "http://localhost:8000",
  });

controller.save().then(() => console.log("meow"));
*/
