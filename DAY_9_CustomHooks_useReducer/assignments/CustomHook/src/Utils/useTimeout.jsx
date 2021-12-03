import React, { useState, useEffect } from "react";

function useTimeout(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, delay * 1000);
    return () => clearInterval(timer);
  }, []);
  return ready;
}

function Timeout() {
  const delay = useTimeout(8);

  if (!delay) {
    return null;
  }
  return (
    <div>
      <h1>Rendering After 5 Seconds</h1>
    </div>
  );
}

export default Timeout;
