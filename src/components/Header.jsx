import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center  bg-cg">
        <div className="flex gap-2 m-5">
          <img src="/book-solid.svg" alt="My Notes" className="w-5" />
          <p className="font-bold text-2xl text-tb">My Notes</p>
        </div>
      </div>
    </>
  );
}
