import Image from "next/image";
import React from "react";
import AssesmentCardContainer from "./[id]/components/AssesmentCardContainer";

const AssessMent = async () => {

  return (
    <div className="w-full h-full relative">
      <div className="flex fixed top-0 right-0 items-center justify-end">
        <Image
          src="/assessment-image.png"
          className="max-w-[18rem] object-center object-cover max-h-26"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="w-full pt-12">
        {/*  */}
        <div className="mx-auto  mb-4 flex justify-center">
          <Image
            src="/skill-link-logo.png"
            className="object-center h-12 max-w-[20rem] object-cover"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <AssesmentCardContainer />
      </div>
    </div>
  );
};

export default AssessMent;
