import mongoose from "mongoose";
import * as models from "./models";

export default async () => {
  if (process.env.MONGODB) {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
    });
  } else {
    throw new Error("MONGODB environment is empty.");
  }
};

export {
  models,
};
