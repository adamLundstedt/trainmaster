import ProfileForm from "../components/profileForm";

const NewUser = () => {
  const userForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  return <ProfileForm formId="add-user-form" userForm={userForm} />;
};
export default NewUser;
