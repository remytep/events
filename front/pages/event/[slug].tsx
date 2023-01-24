import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/EventPage.module.css";

function EventPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { slug } = router.query;
  useEffect(() => {
    axios
      .get(
        "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&facet=slug&refine.slug=" +
          slug
      )
      .then((response) => {
        console.log(response.data.records[0]);
        setData(response.data.records[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.imageContainer}>
            <Image
              src={data.fields.image}
              alt={data.fields.description_fr}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.eventInfo}>
            <p className={styles.dateRange}>{data.fields.daterange_fr}</p>
            <span className={styles.locationName}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                className="map-pin"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{data.fields.location_name}</p>
            </span>
            <div>
              <button className={styles.button}>Organiser une sortie</button>
            </div>
          </div>
        </div>
        {data.fields.longdescription_fr ? (
          <p className={styles.description}>
            {data.fields.longdescription_fr.replace(/(<([^>]+)>)/gi, "")}
          </p>
        ) : null}
      </div>
    );
  }
}

export default EventPage;
