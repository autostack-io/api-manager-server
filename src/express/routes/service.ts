import { models } from "../../mongoose";

export default async (app: any) => {

  app.get("/api/services", (req: any, res: any) => {
    models.Service.find().then((data) => {
      res.status(200).send(data);
    }, (err) => {
      res.status(500).send(err);
    });
  });

  app.post("/api/service/:name", (req: any, res: any) => {
    models.Service.findOne({
      name: req.params.name,
    }).then((data) => {
      if (data) {
        res.status(409).send(data);
      } else {
        models.Service.create({
          name: req.params.name,
        }).then((data) => {
          res.status(201).send(data);
        }, (err) => {
          res.status(500).send(err);
        });
      }
    }, (err) => {
      res.status(500).send(err);
    });
  });

  app.get("/api/service/:name", (req: any, res: any) => {
    models.Service.findOne({
      name: req.params.name,
    }).then((data) => {
      res.status(200).send(data);
    }, (err) => {
      res.status(500).send(err);
    });
  });

  app.put("/api/service/:name", (req: any, res: any) => {
    res.sendStatus(200);
  });

  app.delete("/api/service/:name", (req: any, res: any) => {
    models.Service.findOneAndDelete({
      name: req.params.name,
    }).then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.sendStatus(400);
      }
    }, (err) => {
      res.status(500).send(err);
    });
  });
};
