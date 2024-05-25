import Link from "../components/navigation/Link";
import { SITEMAP } from "../routes";

const Home = () => {
  return (
    <>
      {SITEMAP.map((route) => (
        <Link link={route.link} />
      ))}
    </>
  );
};

export default Home;
