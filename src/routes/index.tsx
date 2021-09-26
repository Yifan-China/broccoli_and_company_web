import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    exact: true,
    title: "首页",
    main: () => <HomePage />,
  },
];

export default routes;
