import proxy from "http-proxy-middleware";
import dashboard from "./dashboard";
import service from "./service";

export default async (app: any) => {
  await service(app);
  await dashboard(app);
};
