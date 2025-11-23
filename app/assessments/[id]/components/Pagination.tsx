"use client";

import React from "react";
import { motion } from "framer-motion";

interface PaginationProps<T extends number> {
  index: T; // current active index
  length: number; // total items
  handleIndex: (id: T) => void; // callback for switching
}

const Pagination = <T extends number>({ index, length, handleIndex }: PaginationProps<T>) => {
  const pages = Array.from({ length });

  return (
    <div className="flex items-center gap-3">
      {pages.map((_, i) => (
        <Pagination.Child
          key={i}
          index={i}
          active={i === index}
          onClick={() => handleIndex(i as T)}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/display-name
Pagination.Child = ({
  index,
  active,
  onClick,
}: {
  index: number;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label={`Go to page ${index + 1}`}
      initial={false}
      animate={{
        scale: active ? 1.3 : 1,
        opacity: active ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        size-3 rounded-full 
        ${active ? "bg-primary" : "bg-gray-300"}
      `}
    />
  );
};

export default Pagination;
