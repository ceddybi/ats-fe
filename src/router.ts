import { Registry } from "next-routes";
const routes = require("next-routes");

export const AppRouter: Registry = routes() // ----   ----      -----
  //.add("about") // about  about     /about
  //.add("blog", "/blog/:slug") // blog   blog      /blog/:slug
  .add("/api/list", "/index") // blog   blog      /blog/:slug
  .add("/api/add", "/eg") // blog   blog      /blog/:slug
  .add("/api/delete", "/eg2") // blog   blog      /blog/:slug
//.add("user", "/user/:id", "profile") // user   profile   /user/:id
//.add("/:noname/:lang(en|es)/:wow+", "complex") // (none) complex   /:noname/:lang(en|es)/:wow+
//.add({ name: "beta", pattern: "/v3", page: "v3" }); // beta   v3        /v3

export default AppRouter; // Default router

export const { Link, Router } = AppRouter;
