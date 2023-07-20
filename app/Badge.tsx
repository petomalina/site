import React from "react";

interface BadgeProps {
  category: string | 'Engineering' | 'Leadership';
  className?: string;
}

export default function Badge(props: BadgeProps) {
  const color = props.category === 'Engineering' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700';

  const classNames = `
    inline-flex items-center rounded-full
    px-2 py-1 text-xs font-medium
    ring-1 ring-inset ring-green-600/20 ${color}
    ${props.className ?? ''}
  `.trim();

  return (
    <span className={classNames}>
      {props.category}
    </span>
  );
}

