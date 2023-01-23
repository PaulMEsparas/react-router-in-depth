import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careersData = useLoaderData();

  return (
    <div className="careers">
      {careersData.map((d) => (
        <Link to={d.id.toString()} key={d.id}>
          <p>{d.title}</p>
          <p>Based in {d.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function

export const careerLoader = async () => {
  const careerRes = await fetch("http://localhost:4000/careers");
  if (!careerRes.ok) {
    throw Error("Could not fetch data");
  }

  return careerRes.json();
};
