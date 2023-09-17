"use client";

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
    const { slotId } = useParams();
    return <div>{slotId}</div>;
};

export default Page;
