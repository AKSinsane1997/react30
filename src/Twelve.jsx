import React, { useState } from "react";

const Twelve = () => {
  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      console.log(imageUrl);
    }
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImage} />

      {image && <img src={image} alt="uplaoded_image" />}
    </div>
  );
};

export default Twelve;
