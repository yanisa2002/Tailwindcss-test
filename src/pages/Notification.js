import React from "react";

const Notification = () => {
  return (
    // <div
    //   class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
    //   role="alert"
    // >
    //   <div class="flex">
    //     <div class="py-1">
    //       <svg
    //         class="fill-current h-6 w-6 text-teal-500 mr-4"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
    //       </svg>
    //     </div>
    //     <div>
    //       <p class="font-bold">Our privacy policy has changed</p>
    //       <p class="text-sm">
    //         Make sure you know how these changes affect you.
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // <div
    //   class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
    //   role="alert"
    // >
    //   <p class="font-bold">Informational message</p>
    //   <p class="text-sm">Some additional text to explain said message.</p>
    // </div>

    // <div
    //   class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-1/2 items-center"
    //   role="alert"
    // >
    //   <p class="font-bold">Be Warned</p>
    //   <p>Something not ideal might be happening.</p>
    // </div>

    // <div role="alert" className="items-center w-1/2 pl-10">
    //   <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    //     Danger
    //   </div>
    //   <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    //     <p>Something not ideal might be happening.</p>
    //   </div>
    // </div>

    <div className="bg-yellow-100">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-1/2 items-center"
        role="alert"
      >
        <strong class="font-bold">Holy smokes!</strong>
        <span class="block sm:inline">Something seriously bad happened.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Notification;
