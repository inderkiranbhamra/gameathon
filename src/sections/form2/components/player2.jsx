import useFormContext from "../hooks/useFormContext";

const Player2 = () => {
  const { data, handleChange, errors } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="player2Name" className="lg:pr-[6vw] text-[#FF692D]">
            Name
          </label>
          <input
            type="text"
            id="p2_name"
            name="p2_name"
            placeholder="Enter player Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p2_name}
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p2_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.p2_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p2_name}</p>
          )}
        </div>
        <div className="flex-col">
          <label htmlFor="player2IGN" className="lg:pr-[7.5vw] text-[#FF692D]">
            IGN
          </label>
          <input
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p2_ign ? "border-red-500" : "" // Add a red border for error
            }`}
            type="text"
            id="p2_ign"
            name="p2_ign"
            placeholder="Enter In Game Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p2_ign}
            onChange={handleChange}
          />
          {errors.p2_ign && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p2_ign}</p>
          )}
        </div>
      </div>
      <div className="flex-col">
        <label htmlFor="player2DiscordTag" className="lg:pr-11 text-[#FF692D]">
          Discord tag
        </label>
        <input
          type="text"
          className="bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent"
          id="p2_discord_tag"
          name="p2_discord_tag"
          placeholder="Enter Discord Tag"
          pattern="[\w\d\s.#]{2,}"
          value={data.p2_discord_tag}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="player2Rank" className="lg:pr-[6.8vw] text-[#FF692D]">
        Rank
      </label>
      <input
        type="text"
        id="p2_rank"
        name="p2_rank"
        className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
          errors.p2_rank ? "border-red-500" : "" // Add a red border for error
        }`}
        placeholder="Enter Rank"
        pattern="[A-Za-z\s]{1,}"
        value={data.p2_rank}
        onChange={handleChange}
      />
      {errors.p2_rank && (
        <p className="text-red-500 text-[1.5vh] mt-2">{errors.p2_rank}</p>
      )}
      <br />
      <div>
        <label htmlFor="player2ContactNo" className="pr-[2.4vw] text-[#FF692D]">
          Contact No *
        </label>
        <input
          type="text"
          id="p2_contact"
          name="p2_contact"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p2_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          pattern="[0-9]{10}"
          value={data.p2_contact}
          onChange={handleChange}
        />
        {errors.p2_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p2_contact}</p>
        )}
      </div>
      <div>
        <label htmlFor=" player2MailId" className="lg:pr-[5vw] text-[#FF692D]">
          Mail ID *
        </label>
        <input
          type="email"
          id="p2_email"
          name="p2_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p2_email ? "border-red-500" : "" // Add a red border for error
          }`}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          value={data.p2_email}
          onChange={handleChange}
        />
        {errors.p2_email && (
          <p className="text-red-500 text-[2vh] mt-2 ">{errors.p2_email}</p>
        )}
      </div>
      <h1>{console.log(errors)}</h1>
    </div>
  );

  return content;
};
export default Player2;
