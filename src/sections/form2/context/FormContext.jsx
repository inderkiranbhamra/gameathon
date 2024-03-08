import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    selectedGame: "BGMI",
    team_name: "",
    college_name: "",
    leader_name: "",
    leader_ign: "",
    leader_discord_tag: "",
    leader_rank: "",
    leader_contact: "",
    leader_email: "",
    p2_name: "",
    p2_ign: "",
    p2_discord_tag: "",
    p2_rank: "",
    p2_contact: "",
    p2_email: "",
    p3_name: "",
    p3_ign: "",
    p3_discord_tag: "",
    p3_rank: "",
    p3_contact: "",
    p3_email: "",
    p4_name: "",
    p4_ign: "",
    p4_discord_tag: "",
    p4_rank: "",
    p4_contact: "",
    p4_email: "",
    p5_name: "",
    p5_ign: "",
    p5_discord_tag: "",
    p5_rank: "",
    p5_contact: "",
    p5_email: "",
  });
  const title = {
    0: "Team Info",
    1: "Team leader Info",
    2: "Player 2 info",
    3: "Player 3 info",
    4: "Player 4 info",
    5: "Player 5 info",
  };
  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    let error = "";

    if (
      name === "team_name" ||
      name === "robot_drive" ||
      name === "leader_name" ||
      name === "leader_ign" ||
      name === "leader_rank" ||
      name === "p2_name" ||
      name === "p2_ign" ||
      name === "p2_rank" ||
      name === "p3_name" ||
      name === "p3_ign" ||
      name === "p3_rank" ||
      name === "p4_name" ||
      name === "p4_ign" ||
      name === "p4_rank" ||
      name === "p5_name" ||
      name === "p5_ign" ||
      name === "p5_rank"
    ) {
      // Check for required fields
      error = value.trim() === "" ? "This field is required." : "";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    if (error === "") {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let error = "";

    if (
      name === "leader_contact" ||
      name === "p2_contact" ||
      name === "p3_contact" ||
      name === "p4_contact" ||
      name === "p5_contact"
    ) {
      // Check for a valid 10-digit number only when the value is not empty
      if (value.trim() !== "" && !/^\d{10}$/.test(value)) {
        error = "Invalid contact number (should be 10 digits).";
      }
    }

    if (
      name === "leader_email" ||
      name === "p2_email" ||
      name === "p3_email" ||
      name === "p4_email" ||
      name === "p5_email"
    ) {
      // Check for a valid email format only when the value is not empty
      if (value.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const { CollegeName, ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const disablePrev = page === 0;

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        prevHide,
        nextHide,
        submitHide,
        errors,
        handleBlur,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
