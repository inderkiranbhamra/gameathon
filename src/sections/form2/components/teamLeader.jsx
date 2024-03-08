import useFormContext from "../hooks/useFormContext";

const TeamLeader = () => {
  const { data, handleChange, errors, handleBlur } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container ">
        <div className="flex-col ">
          <label
            htmlFor="TeamLeaderName"
            className="lg:pr-[6vw] text-[#FF692D]"
          >
            Name*
          </label>
          <input
            type="text"
            id="leader_name"
            name="leader_name"
            placeholder="Enter Team Leader Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.leader_name}
            className={`bg-transparent  border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.leader_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.leader_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">
              {errors.leader_name}
            </p>
          )}
        </div>
        <div className="flex-col">
          <label
            htmlFor="TeamLeaderIGN"
            className="lg:pr-[7.5vw] text-[#FF692D]"
          >
            IGN
          </label>
          <input
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.leader_ign ? "border-red-500" : "" // Add a red border for error
            }`}
            type="text"
            id="leader_ign"
            name="leader_ign"
            placeholder="Enter In Game Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.leader_ign}
            onChange={handleChange}
          />
          {errors.leader_ign && (
            <p className="text-red-500 text-[1.5vh] mt-2">
              {errors.leader_ign}
            </p>
          )}
        </div>
      </div>
      <div className="flex-col">
        <label
          htmlFor="TeamLeaderDiscordTag"
          className="lg:pr-11 text-[#FF692D]"
        >
          Discord tag
        </label>
        <input
          type="text"
          className="bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent"
          id="leader_discord_tag"
          name="leader_discord_tag"
          placeholder="Enter Discord Tag"
          pattern="[\w\d\s.#]{2,}"
          value={data.leader_discord_tag}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="TeamLeaderRank" className="lg:pr-[6.8vw] text-[#FF692D]">
        Rank
      </label>
      <input
        type="text"
        id="leader_rank"
        name="leader_rank"
        className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
          errors.leader_rank ? "border-red-500" : "" // Add a red border for error
        }`}
        placeholder="Enter Rank"
        pattern="[A-Za-z\s]{1,}"
        value={data.leader_rank}
        onChange={handleChange}
      />
      {errors.leader_rank && (
        <p className="text-red-500 text-[1.5vh] mt-2">{errors.leader_rank}</p>
      )}

      <br />
      <div>
        <label
          htmlFor="TeamLeaderContactNo"
          className="pr-[2.4vw] text-[#FF692D]"
        >
          Contact No *
        </label>
        <input
          type="tel"
          id="leader_contact"
          name="leader_contact"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.leader_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          value={data.leader_contact}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.leader_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">
            {errors.leader_contact}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor=" TeamLeaderMailId"
          className="lg:pr-[5vw] text-[#FF692D]"
        >
          Mail ID *
        </label>
        <input
          type="email"
          id="leader_email"
          name="leader_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.leader_email ? "border-red-500" : "" // Add a red border for error
          }`}
          value={data.leader_email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.leader_email && (
          <p className="text-red-500 text-[1.5vh] mt-2">
            {errors.leader_email}
          </p>
        )}
      </div>
    </div>
  );

  return content;
};
export default TeamLeader;
