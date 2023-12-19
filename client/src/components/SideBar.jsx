import { Link } from "react-router-dom";

const SideBar = () => {
  const routePath = [
    { id: 1, path: "/profile/user", pathName: "Home" },
    { id: 2, path: "/profile/user/enrolled", pathName: "Enrolled" },
    { id: 3, path: "/profile/user/cart", pathName: "Cart" },
  ];
  return (
    <div>
      <ul className="w-96 shadow h-screen p-4 bg-gray-50">
        {routePath.map((route) => (
          <li key={route.id} className="px-4 py-2 border">
            <Link to={route.path}> {route.pathName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
