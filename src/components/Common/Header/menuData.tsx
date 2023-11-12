type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  phone?: boolean;
  guest?: boolean;
  auth?: boolean;
};

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/login",
    newTab: false,
    phone: true,
    guest: true,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/register",
    newTab: false,
    phone: true,
    guest: true,
  },
  {
    id: 7,
    title: "Logout",
    path: "/logout",
    newTab: false,
    phone: true,
    auth: true,
  },
  {
    id: 8,
    title: "Explore",
    path: "/events",
    newTab: false,
    phone: true,
    auth: true,
  },
];
export default menuData;
