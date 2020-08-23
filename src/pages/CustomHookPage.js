import React, { useState, useEffect } from "react";

export default function CustomHookPage() {
  return <div>{useClock().toLocaleTimeString()}</div>;
}

function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    });
    return () => clearInterval(timer);
  }, []);
}
