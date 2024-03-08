import useFormContext from "../hooks/useFormContext";
import "./../index.css";

const Team = () => {
  const { data, handleChange, errors } = useFormContext();

  const content = (
    <div className="flex-col  text-[#FF692D] mb-[22vh]">
      <div className="split-container  text-[#FF692D] flex flex-col gap-2">
        <label htmlFor="selectedGame" className="text-[2.5vh] mb-4">
          Select Game
        </label>
        <div>
          <input
            type="radio"
            id="bgmiRadio"
            name="selectedGame"
            value="BGMI"
            checked={data.selectedGame === "BGMI"}
            onChange={handleChange}
            defaultChecked
          />
          <label
            htmlFor="bgmiRadio"
            className="p-2 mr-3 border rounded-md border-[#FF692D] text-[2vh] text-white"
          >
            BGMI
          </label>

          <input
            type="radio"
            id="valorantRadio"
            name="selectedGame"
            value="Valorant"
            checked={data.selectedGame === "Valorant"}
            onChange={handleChange}
            defaultChecked
          />
          <label
            htmlFor="valorantRadio"
            className="p-2  border rounded-md border-[#FF692D] text-[2vh] text-white"
          >
            Valorant
          </label>
        </div>

        <div className="mt-8">
          <label htmlFor="TeamName" className="pr-6 text-[2vh]">
            Team Name*
          </label>
          <input
            type="text"
            id="team_name"
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.team_name ? "border-red-500" : "" // Add a red border for error
            }`}
            name="team_name"
            placeholder="Enter Team Name"
            value={data.team_name}
            onChange={handleChange}
          />
          {errors.team_name && (
            <p className="text-red-500 text-[1.5vh] mt-2 ">
              {errors.team_name}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor="CollegeName" className="pr-4 text-[2vh]">
          College Name
        </label>
        <input
          type="text"
          id="college_name"
          name="college_name"
          className=" bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent"
          placeholder="Enter college Name"
          value={data.college_name}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return content;
};
export default Team;
