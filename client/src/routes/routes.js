import { lazy } from "react";

const Navbar = lazy(()=>import("../layouts/Navbar"));
const Home = lazy(()=> import("../pages/Home"))



export {Navbar,Home}