import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="">
      <header>
        <nav>
          <h1>Routes</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">help</NavLink>
          <NavLink to="careers">careers</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
