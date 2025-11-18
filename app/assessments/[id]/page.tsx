import Image from "next/image";
import React from "react";
import AssesmentCardContainer from "./components/AssesmentCardContainer";

const AssessMent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="w-full h-full relative">
      <div className="flex items-center justify-end">
        <Image
          src="/assessment-image.png"
          className="max-w-[18rem] object-center object-cover max-h-36"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="w-full">
        {/*  */}
        <div className="mx-auto">
          <Image
            src="/skill-link-logo.png"
            className="object-center object-cover"
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
