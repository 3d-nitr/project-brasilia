import React, { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    var spinner = function () {
      setTimeout(function () {
        const spin = document.getElementById("spinner");
        spin.classList.remove("show");
      }, 1);
    };
    spinner();
  }, []);

  return (
    <div
      id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        class="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
