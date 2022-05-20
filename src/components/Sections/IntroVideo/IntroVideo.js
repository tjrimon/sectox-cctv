import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const IntroVideo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-[800px] flex justify-center items-center bg-[url('https://i.ibb.co/fr2N2Pj/video-bg.png')] bg-cover bg-center bg-no-repeat flex-col">
      <button
        className="inline-block p-5 rounded-full border border-gray-100"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon
          className="rounded-full bg-primary inline-block py-8 px-9 text-xl font-bold text-white"
          icon={faPlay}
        />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/ii4XQVjjOGo"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex text-center justify-center items-center text-white  uppercase pt-10 pb-2">
        <hr className="ml-3 border-[1px]  border-white w-8 mr-3" />
        <p className="text-center">intro video</p>
        <hr className="ml-3 border-[1px]  border-white w-8 " />
      </div>
      <h3 className="text-3xl text-white lg:text-3xl font-bold">
        CCTV Security On The Way
      </h3>
    </div>
  );
};

export default IntroVideo;
