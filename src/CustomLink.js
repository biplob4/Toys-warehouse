import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? 'black' : 'gray',
          padding: "0px", borderBottom: match ? '2px solid tomato' : '2px solid #fff'
        }}
        className={match ? "underline" : "none"}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;