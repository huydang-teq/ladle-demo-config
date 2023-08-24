import Image from "next/image";
import React from "react";
import type { FC } from "react";
import Link from "next/link";
import cn from "classnames";

type IType = "horizontal" | "vertical";

interface Props {
  imgSrc: string;
  title?: string;
  description?: string;
  type?: IType;
}

const Card: FC<Props> = ({
  imgSrc,
  title = "title",
  description = "description",
  type = "horizontal",
}) => {
  const TYPE_STYLE_MAPPING: Record<IType, string> = {
    vertical: "max-w-xs w-full",
    horizontal: "flex flex-rows",
  };


  return (
    <Link href="https://www.google.com" className="">
      <div
        className={cn(
          "rounded-xl overflow-hidden border border-solid border-lime-500 shadow-2xl ",
          TYPE_STYLE_MAPPING[type]
        )}
      >
        <div
          className=" shrink-0"
        >
          <Image src={imgSrc} alt="card" priority  objectFit="cover" height={300} width={320}/>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl text-center font-semibold text-gray-700">
            {title}
          </h3>
          <p className="text-base text-justify text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
