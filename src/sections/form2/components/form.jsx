import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    disablePrev,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  // submit form funtion
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    let modifiedData = { ...data };

    try {
      if (data.selectedGame === "valorant") {
        delete data.selectedGame;

        response = await axios.post(
          "https://valoregistration2.vercel.app/submit",
          data
        );
        console.log(data);
      } else if (data.selectedGame === "BGMI") {
        delete modifiedData.p5_name;
        delete modifiedData.selectedGame;
        delete modifiedData.p5_ign;
        delete modifiedData.p5_discord_tag;
        delete modifiedData.p5_rank;
        delete modifiedData.p5_contact;
        delete modifiedData.p5_email;

        response = await axios.post(
          "https://bgmiregistration.vercel.app/submit",
          modifiedData
        );
        console.log(modifiedData);
      }

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form. Please try again.");
    }
  };
  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <header>
        <div className="text-white text-[3vh] mb-[15px]">
          {data.selectedGame === "BGMI" && page < 5 ? title[page] : null}
          {data.selectedGame === "Valorant" ? title[page] : null}
        </div>
        {data.selectedGame === "BGMI" && page < 5 ? <FormInputs /> : null}
        {data.selectedGame === "Valorant" ? <FormInputs /> : null}

        {/* <FormInputs /> */}

        <div className="button-container text-white">
          <button
            type="button"
            className={`button w-[90px] ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>

          <button
            type="button"
            className={`button w-[90px] ${nextHide}`}
            onClick={handleNext}
            // disabled={disableNext}
          >
            Next
          </button>

          <button
            type="submit"
            className={`button w-[90px] ${submitHide}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </header>
    </form>
  );

  return content;
};
export default Form;
