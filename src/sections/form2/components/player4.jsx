import useFormContext from "../hooks/useFormContext";

const Player4 = () => {
  const { data, handleChange, errors } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="player4Name" className="lg:pr-[6vw] text-[#FF692D]">
            Name
          </label>
          <input
            type="text"
            id="p4_name"
            name="p4_name"
            placeholder="Enter player Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p4_name}
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p4_name ? "border-red-500" : "" // Add a red border for error
            }`}
            onChange={handleChange}
          />
          {errors.p4_name && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_name}</p>
          )}
        </div>
        <div className="flex-col">
          <label htmlFor="player4IGN" className="lg:pr-[7.5vw] text-[#FF692D]">
            IGN
          </label>
          <input
            className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
              errors.p4_ign ? "border-red-500" : "" // Add a red border for error
            }`}
            type="text"
            id="p4_ign"
            name="p4_ign"
            placeholder="Enter In Game Name"
            pattern="[A-Za-z\s]{1,}"
            value={data.p4_ign}
            onChange={handleChange}
          />
          {errors.p4_ign && (
            <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_ign}</p>
          )}
        </div>
      </div>
      <div className="flex-col">
        <label htmlFor="player4DiscordTag" className="lg:pr-11 text-[#FF692D]">
          Discord tag
        </label>
        <input
          type="text"
          className="bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent"
          id="p4_discord_tag"
          name="p4_discord_tag"
          placeholder="Enter Discord Tag"
          pattern="[\w\d\s.#]{2,}"
          value={data.p4_discord_tag}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="player4Rank" className="lg:pr-[6.8vw] text-[#FF692D]">
        Rank
      </label>
      <input
        type="text"
        id="p4_rank"
        name="p4_rank"
        className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
          errors.p4_rank ? "border-red-500" : "" // Add a red border for error
        }`}
        placeholder="Enter Rank"
        pattern="[A-Za-z\s]{1,}"
        value={data.p4_rank}
        onChange={handleChange}
      />
      {errors.p4_rank && (
        <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_rank}</p>
      )}
      <br />
      <div>
        <label htmlFor="player4ContactNo" className="pr-[2.4vw] text-[#FF692D]">
          Contact No *
        </label>
        <input
          type="text"
          id="p4_contact"
          name="p4_contact"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p4_contact ? "border-red-500" : "" // Add a red border for error
          }`}
          placeholder="Enter a 10-digit contact number"
          pattern="[0-9]{10}"
          value={data.p4_contact}
          onChange={handleChange}
        />
        {errors.p4_contact && (
          <p className="text-red-500 text-[1.5vh] mt-2">{errors.p4_contact}</p>
        )}
      </div>
      <div>
        <label htmlFor=" player4MailId" className="lg:pr-[5vw] text-[#FF692D]">
          Mail ID *
        </label>
        <input
          type="email"
          id="p4_email"
          name="p4_email"
          placeholder="xyz@gmail.com"
          className={`bg-transparent border-t-transparent border-x-transparent border-b-2 border-[#a2a2a2] w-full text-white focus:border-t-transparent focus:border-x-transparent focus:border-b-[#a2a2a2] focus:ring-transparent ${
            errors.p4_email ? "border-red-500" : "" // Add a red border for error
          }`}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          value={data.p4_email}
          onChange={handleChange}
        />
        {errors.p4_email && (
          <p className="text-red-500 text-[2vh] mt-2 ">{errors.p4_email}</p>
        )}
      </div>
      <h1>{console.log(errors)}</h1>
    </div>
  );

  return content;
};
export default Player4;
