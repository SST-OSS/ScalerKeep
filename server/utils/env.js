import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export const { CLIENT_ORIGIN, PORT } = process.env;
