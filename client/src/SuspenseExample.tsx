import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<{
    name: string;
    phone: string;
    age: string;
    website: string;
  } | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    fetchUserById();
    fetchProfileImage();
  }, []);

  const fetchProfileImage = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/1",
      );
      const profileImage = await response.json();
      console.log(profileImage.url);
      return setProfileImage(profileImage.thumbnailUrl);
    } catch (error) {
      return console.log(error);
    }
  };

  const fetchUserById = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/1`,
      );
      const user = await response.json();
      return setUser(user);
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <>
      {user && profileImage && (
        <section>
          <img alt={user.name} src={profileImage} />
          <h3 className="name">{user.name}</h3>
          <p className="website">{user.website}</p>
          <p className="phone">{user.phone}</p>
        </section>
      )}
    </>
  );
};

export default UserProfile;
