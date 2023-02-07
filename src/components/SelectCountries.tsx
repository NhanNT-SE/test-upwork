export interface Country {
  country: string;
  flag: string;
}

export const SelectCountries: React.FC<{ countries: Country[] }> = ({
  countries,
}) => {
  return (
    <div className="w-3/12 max-w-full p-4 flex flex-col items-center bg-slate-400">
      <div className="w-full">
        <p className="text-gray-600 text-start">Language selection</p>
        <div className="bg-white p-4">
          {countries.map((e) => {
            return (
              <div
                className="flex justify-between p-8 border hover:bg-cyan-900 hover:rounded-lg mb-4 hover:text-white"
                key={e.country} // Temporarily use country name for key
              >
                <div className="left flex items-center">
                  <img
                    className="inline-block h-16 w-16 rounded-full mr-4 object-cover border border-gray-100"
                    src={e.flag}
                    alt="country-flag"
                  />

                  <div className="text">{e.country}</div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-sky-400 p-1 text-sky-400 shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
