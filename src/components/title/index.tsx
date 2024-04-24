import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Wrapper } from "@components/title/style";

export default function Title() {
  const router = useLocation();
  const [routes, setRoutes] = useState<string[] | []>([]);

  useEffect(() => {
    setRoutes(router.pathname.split("/").slice(1));
  }, [router]);

  return (
    <Wrapper>
      <div className="title">{routes[routes.length - 1]}</div>
      <ul className="breadcrumb">
        <li>dashboard</li>
        {routes.map((route: string, idx: number) => (
          <li key={idx}>{route}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
