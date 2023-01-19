import React from "react";
import Image from "next/image";
import styles from "../../styles/EventCard.module.css";

function EventCard({ data }) {
  console.log(data);
  return (
    <div className={styles.eventCard}>
      <hr />
      <h2 className={styles.title}>
        {data.fields.title_fr
          ? data.fields.title_fr
          : data.fields.originagenda_title}
      </h2>
      {data.fields.originalimage ? (
        <div className={styles.imageContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.moreIcon}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              clipRule="evenodd"
            />
          </svg>
          <Image
            src={data.fields.image}
            alt={data.fields.description_fr}
            className={styles.images}
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      ) : null}
      <div className={styles.eventInfos}>
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
      </div>
    </div>
  );
}

export default EventCard;
