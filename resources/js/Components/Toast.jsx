import React, { useEffect } from "react";

function Toast({ message, type }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const toastElement = document.getElementById("toast");
            if (toastElement) {
                toastElement.style.display = "none";
            }
        }, 3000); // Hide after 3 seconds

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <div
            id="toast"
            className={`flex justify-center w-fit px-4 py-2 rounded-full shadow fixed bottom-8 right-8 z-50 border ${
                type === "success"
                    ? "dark:text-ilyes bg-emerald-100 border-ilyes dark:bg-emerald-950"
                    : "dark:text-rose-500 bg-rose-100 border-rose-500 dark:bg-rose-950"
            }`}
        >
            <div>
                {type === "success" ? (
                    <i className="fa-solid fa-circle-check"></i>
                ) : (
                    <i className="fa-solid fa-triangle-exclamation"></i>
                )}
            </div>
            <div className="ms-3 text-sm font-semibold">{message || ""}</div>
        </div>
    );
}

export default Toast;
