import React, { useEffect, useState } from "react";

const Six = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {photos.map((photo, index) => (
        <li key={index}>{photo.title}</li>
      ))}
    </div>
  );
};

export default Six;
