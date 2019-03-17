export default async (app: any) => {
  app.get("/dashboard", (req: any, res: any) => {
    res.send("OK");
  });
};
