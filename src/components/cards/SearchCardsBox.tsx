import React from "react";

type SearchCardsBoxProps = {
  onChange: (value: string) => void;
};
export const SearchCardsBox = ({ onChange }: SearchCardsBoxProps) => {
  const id = React.useId();

  return (
    <form
      role="search"
      className="flex gap-2 items-center sticky top-0 z-10 p-2 backdrop-blur-sm bg-white/75"
    >
      <label htmlFor={id} className="font-semibold">
        Search
      </label>
      <input
        type="text"
        placeholder="Ex: Celebi, Weedle, ..."
        id={id}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-sky-200 focus:border-sky-500 outline-none rounded py-1 px-4"
      />
    </form>
  );
};
