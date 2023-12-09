const Info = () => {
  return (
    <div className="grid grid-cols-3 p-10 items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          height="2em"
          width="2em"
          color="white"
        >
          <path
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={10}
            d="M282 256 A26 26 0 0 1 256 282 A26 26 0 0 1 230 256 A26 26 0 0 1 282 256 z"
          />
          <path
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={10}
            d="M372 256 A26 26 0 0 1 346 282 A26 26 0 0 1 320 256 A26 26 0 0 1 372 256 z"
          />
          <path
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={10}
            d="M192 256 A26 26 0 0 1 166 282 A26 26 0 0 1 140 256 A26 26 0 0 1 192 256 z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={42}
            d="M160 368L32 256l128-112M352 368l128-112-128-112"
          />
        </svg>
        <h3 className="text-slate-200">Experience</h3>
        <span className="text-cyan-400">+3 Years in TI</span>
      </div>

      <div className="flex justify-center items-center flex-col">
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          height="2em"
          width="2em"
          color="white"
        >
          <path d="M2.5 8a5.5 5.5 0 018.25-4.764.5.5 0 00.5-.866A6.5 6.5 0 1014.5 8a.5.5 0 00-1 0 5.5 5.5 0 11-11 0z" />
          <path d="M15.354 3.354a.5.5 0 00-.708-.708L8 9.293 5.354 6.646a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l7-7z" />
        </svg>
        <h3 className="text-slate-200 ">Completed</h3>
        <span className="text-cyan-400">+5 Projects</span>
      </div>

      <div className="flex justify-center items-center flex-col">
        <svg
          viewBox="0 0 21 21"
          fill="currentColor"
          height="2em"
          width="2em"
          color="white"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.5 10.5 A8 8 0 0 1 10.5 18.5 A8 8 0 0 1 2.5 10.5 A8 8 0 0 1 18.5 10.5 z" />
            <path d="M14.5 10.5 A4 4 0 0 1 10.5 14.5 A4 4 0 0 1 6.5 10.5 A4 4 0 0 1 14.5 10.5 z" />
            <path d="M13.5 7.5L16 5M13.5 13.5L16 16M7.5 13.5L5 16M7.5 7.5L5 5" />
          </g>
        </svg>
        <h3 className="text-slate-200">Support</h3>
        <span className="text-cyan-400">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
