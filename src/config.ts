import * as envalid from "envalid";

export const env = envalid.cleanEnv(process.env, {
  GRAPHQL_URI: envalid.str(),
  NODE_ENV: envalid.str({ default: "development" }),
  PORT: envalid.port({ default: 3000 }),
  GA_TRACKING_ID: envalid.str({ default: "" }),
  ENFORCED_LOCALE: envalid.str({ default: "" }),
});
