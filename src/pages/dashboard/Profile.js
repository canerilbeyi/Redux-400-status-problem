import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const { name, email, lastName, location } = userData;

  const formData = [
    {
      id: 1,
      type: "text",
      name: "name",
      value: name,
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      labelText: "Last Name",
      value: lastName,
    },
    {
      id: 3,
      type: "email",
      name: "email",
      value: email,
    },
    {
      id: 4,
      type: "text",
      name: "location",
      value: location,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill all fields");
      return;
    }

    if (
      userData.name === user.name &&
      userData.email === user.email &&
      userData.lastName === user.lastName &&
      userData.location === user.location
    ) {
      toast.error("No changes made");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>profile</h3>
        <div className="form-center">
          {formData.map((form) => {
            return (
              <FormRow key={form.id} {...form} handleChange={handleChange} />
            );
          })}
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
