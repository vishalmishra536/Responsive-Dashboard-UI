import React, { useEffect, useState } from "react";

function Profile() {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profilePhoto") || "https://via.placeholder.com/150",
  );

  useEffect(() => {
    localStorage.setItem("profilePhoto", profileImage);
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="card p-3 text-center mx-auto" style={{ width: "220px" }}>
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-circle border border-3 mx-auto"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />

        <input
          id="profileImage"
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />

        <label
          htmlFor="profileImage"
          className="mt-3 text-primary fw-bold"
          style={{ cursor: "pointer" }}
        >
          Choose Photo
        </label>
        <div className="text-success">
          <h4>Aaru</h4>
          <h4>Web Developer</h4>
          <h4>Aaru@gmial.com</h4>
          <h4>+91-9838210000</h4>
        </div>
      </div>
    </>
  );
}

export default Profile;
