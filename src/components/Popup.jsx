import { useState, useEffect } from "react";

export default function Popup({ code = "PROMO20", delay = 60 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const [paused, setPaused] = useState(false);

  // Show popup after a delay
  useEffect(() => {
    const popupClosed = sessionStorage.getItem("popupClosed");
    if (!popupClosed) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000); // delay in seconds

      // Clean up timeout on component unmount
      return () => clearTimeout(timeoutId);
    }
  }, [delay]);

  // Handle the progress bar
  useEffect(() => {
    if (isVisible && !paused) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            closePopup();
            return 0;
          }
          return prev - 0.1;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible, paused]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("popupClosed", "true"); // Store in sessionStorage
  };

  const doCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Promo code copied!");
  };

  return (
    <>
      {isVisible && (
        <div
          className="popup fixed inset-0 flex items-center justify-center bg-dark-blur"
          onClick={closePopup}
        >
          <div
            className="popup-content relative bg-white p-6 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button className="absolute top-2 right-2" onClick={closePopup}>
              &times;
            </button>
            <h2 className="text-center mb-4">Özel İndirim!</h2>
            <p className="text-center mb-4">
              Bu kodu kullanarak %20 indirim kazanın:{" "}
              <strong className="promo-code cursor-pointer" onClick={doCopy}>
                {code}
              </strong>
            </p>
            <a href="/shop" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Alışverişe Başla
            </a>
            <div className="progress-bar mt-4 h-2 bg-gray-300 rounded">
              <div
                className="h-full bg-blue-500 rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
