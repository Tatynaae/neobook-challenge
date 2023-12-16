import React from "react";

const Closed = ({open, setOpen}) => {
  
  return open ? (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setOpen(!open)}
      style={{
        cursor: "pointer"
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.1303 9.1469C20.2899 7.92683 20.2899 6.07317 19.1303 4.8531C17.1745 2.79533 13.8155 0 10 0C6.18448 0 2.82549 2.79533 0.869705 4.8531C-0.289902 6.07317 -0.289902 7.92683 0.869706 9.1469C2.82549 11.2047 6.18448 14 10 14C13.8155 14 17.1745 11.2047 19.1303 9.1469ZM10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z"
        fill="#5458EA"
      />
    </svg>
  ) : (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setOpen(!open)}
      style={{
        cursor: "pointer"
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.46967 1.53033C1.17678 1.23744 1.17678 0.762563 1.46967 0.46967C1.76256 0.176777 2.23744 0.176777 2.53033 0.46967L18.5303 16.4697C18.8232 16.7626 18.8232 17.2374 18.5303 17.5303C18.2374 17.8232 17.7626 17.8232 17.4697 17.5303L14.6429 14.7036C13.2337 15.4709 11.66 16 10 16C6.18448 16 2.82549 13.2047 0.869705 11.1469C-0.289902 9.92683 -0.289902 8.07317 0.869706 6.8531C1.69953 5.98001 2.78196 4.97414 4.04468 4.10534L1.46967 1.53033ZM7.41536 7.47603C7.15145 7.92266 7 8.44364 7 9C7 10.6569 8.34315 12 10 12C10.5564 12 11.0773 11.8486 11.524 11.5846L7.41536 7.47603ZM10 2C13.8155 2 17.1745 4.79533 19.1303 6.8531C20.2899 8.07317 20.2899 9.92683 19.1303 11.1469C18.6902 11.6099 18.1791 12.1103 17.6078 12.6077L7.4127 2.41264C8.24217 2.15256 9.10863 2 10 2Z"
        fill="#C0C0C0"
      />
    </svg>
  );
};

export default Closed;
