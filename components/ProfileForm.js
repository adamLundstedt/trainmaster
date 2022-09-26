import { useRouter } from "next/router";
import { useState } from "react";

const ProfileForm = ({ formId, userForm }) => {
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

  const postData = async (form) => {
    try {
      const res = await fetch("/api/userIndex", {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      router.push("/");
    } catch (error) {
      setMessage("failed to add user");
    }
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const formValidate = () => {
    let err = {};
    if (!form.firstName) err.name = "Name is required";
    if (!form.lastName) err.lastName = "last is required";
    if (!form.email) err.email = "email is required";
    if (!form.phoneNumber) err.phoneNumber = "phonenumber is required";
    return err;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }
  };
  return (
    <div>
      <h1 className="text-blue-400">Registrera medlem</h1>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="text-blue-400">
          Förnamn
        </label>
        <input
          type="text"
          maxLength="20"
          name="firstName"
          value={form.firstName}
          required
          placeholder="Skriv in ditt förnamn"
          onChange={handleChange}
        />

        <label htmlFor="lastName">Efternamn</label>
        <input
          type="text"
          maxLength="20"
          name="lastName"
          value={form.lastName}
          required
          placeholder="Skriv in ditt efternamn"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          maxLength="30"
          value={form.email}
          required
          name="email"
          placeholder="Skriv in din email"
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Telefonnummer</label>
        <input
          type="text"
          maxLength="20"
          value={form.phoneNumber}
          required
          name="phoneNumber"
          placeholder="Skriv in ditt telefonnummer"
          onChange={handleChange}
        />

        <input type="submit" value="Registrera" />
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
export default ProfileForm;
