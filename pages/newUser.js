import Form from "../components/Form";

const NewUser = () => {
  const userForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  return <Form formId="add-user-form" userForm={userForm} />;
};
export default NewUser;
