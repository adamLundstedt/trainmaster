import { useRouter } from "next/router";
import { useState } from "react";

const Form = ({ formId, userForm }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: userForm.firstName,
    lastName: userForm.lastName,
    email: userForm.email,
    phoneNumber: userForm.phoneNumber,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /*const formValidate = () => {
    let err = {};
    if (!form.firstName) err.name = "Name is required";
    if (!form.lastName) err.lastName = "last is required";
    if (!form.email) err.email = "email is required";
    if (!form.phoneNumber) err.phoneNumber = "phonenumber is required";
    return err;
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.password !== form.repeatPassword) {
      setMessage("Lösenorden matchar inte varandra!");
      return;
    } else {
      setMessage("");
    }
    /*const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }*/
    postData();
  };

  const postToApi = async (url, data) =>
    await (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: JSON.stringify(data),
      })
    ).json();

  const postData = async () => {
    // ? error handling - if already in db?
    let member = { password: form.password };
    let user = Object.assign({}, form);
    delete user.password;
    delete user.repeatPassword;
    // create the user
    const result = await postToApi("/api/userIndex", user);
    // set the users id as userId in the member
    member.userID = result.data._id;
    // create the member
    await postToApi("/api/memberIndex", member);
  };

  return (
    <div className="">
      <h1 className="text-white">Registrera medlem</h1>
      <form
        id={formId}
        onSubmit={handleSubmit}
        className="grid grid-rows-1 gap-2 max-w-xs  "
      >
        <input
          type="text"
          maxLength="20"
          name="firstName"
          value={form.firstName}
          required
          placeholder="Förnamn"
          onChange={handleChange}
          className="text-center"
        />

        <input
          type="text"
          maxLength="20"
          name="lastName"
          value={form.lastName}
          required
          placeholder="Efternamn"
          onChange={handleChange}
        />

        <input
          type="email"
          maxLength="30"
          value={form.email}
          required
          name="email"
          placeholder="Mailadress"
          onChange={handleChange}
        />

        <input
          type="text"
          maxLength="20"
          value={form.phoneNumber}
          required
          name="phoneNumber"
          placeholder="Telefonnummer"
          onChange={handleChange}
        />

        <input
          type="password"
          maxLength="20"
          value={form.password}
          required
          minLength="6"
          name="password"
          placeholder="Välj lösenord"
          onChange={handleChange}
        />

        <input
          type="password"
          maxLength="20"
          value={form.repeatPassword}
          required
          minLength="6"
          name="repeatPassword"
          placeholder="Upprepa ditt lösenord"
          onChange={handleChange}
        />

        <input type="submit" value="Registrera" className="text-white" />
      </form>
      <p>{message}</p>

      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </div>
  );
};
export default Form;
