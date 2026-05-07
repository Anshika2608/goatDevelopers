import React from "react";
import TermCard from "./TermCard";

export default function TermList({ terms, selected, onSelect }) {
  return (
    <div className="flex-1 overflow-y-auto pr-2 pb-20 no-scrollbar space-y-2.5">
      {terms.map((item, i) => (
        <TermCard
          key={item.id}
          item={item}
          index={i}
          isSelected={selected.id === item.id}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
