import React, { useContext } from "react";
import { CategoryContext } from "./CategoryContext";

interface BadgeProps {
    category: 'Engineering' | 'Leadership';
}

export default function Badge(props: BadgeProps) {
    const color = props.category === 'Engineering' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700';
    const { toggleCategory } = useContext(CategoryContext);


    return (
        <span className={`inline-flex items-center rounded-full
                    px-2 py-1 text-xs font-medium
                    ring-1 ring-inset ring-green-600/20 ${color}`}
                    onClick={() => {toggleCategory(props.category)}}>
            {props.category}
        </span>
    );
}
