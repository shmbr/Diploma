import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [headers, setHeaders] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbz_xIKNZ6d9I3IWtPa_tH-Jex9f8-0SDf1OADJ_HL8hf3aAjaCZmPzo1Lua78rPlOi-pA/exec"
        );
        setHeaders(response.data.headers);
        setData(response.data.data);

        console.log(response);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((card: any) => (
        <div
          style={{
            border: "1px solid",
            padding: 8,
            marginBlock: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 700, marginRight: 4 }}>
              {headers[0][0]}
            </div>
            {card[0]}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 700, marginRight: 4 }}>
              {headers[0][1]}
            </div>
            {card[1]}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 700, marginRight: 4 }}>
              {headers[0][2]}
            </div>
            {card[2]}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 700, marginRight: 4 }}>
              {headers[0][3]}
            </div>
            {card[3]}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 700, marginRight: 4 }}>
              {headers[0][4]}
            </div>
            {card[4]}
          </div>
        </div>
      ))}
    </>
  );
};

export default Api;
