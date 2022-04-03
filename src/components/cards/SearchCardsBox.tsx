import React, { useRef } from "react";

type SearchCardsBoxProps = {
  onChange: (value: string) => void;
};
export const SearchCardsBox = ({ onChange }: SearchCardsBoxProps) => {
  const id = React.useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.blur();
  };

  return (
    <form
      role="search"
      className="flex gap-2 items-center sticky top-0 z-10 p-2 backdrop-blur-sm bg-white/75"
      onSubmit={handleSubmit}
    >
      <label htmlFor={id} className="font-semibold">
        Search
      </label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        placeholder="Ex: Celebi, Weedle, ..."
        className="flex-1 border border-sky-200 focus:border-sky-500 outline-none rounded py-1 px-4"
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};
