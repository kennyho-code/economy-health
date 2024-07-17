import { getGdpData } from "@/lib/getGdpData";

async function getData() {
  console.log("getData");
  const data = await fetch("http://localhost:3000/api/gdp");
  console.log(await data.json());
  return "yo";
}
async function GdpPage() {
  const d = await getGdpData();
  console.log(d);
  return (
    <div>
      gdp
      <div>
        {/* <iframe
          src="https://data.worldbank.org/share/widget?end=2023&indicators=NY.GDP.MKTP.CD&locations=US&start=1960"
          width="450"
          height="300"
          frameBorder="0"
          scrolling="no"
        ></iframe> */}
      </div>
    </div>
  );
}

export default GdpPage;
