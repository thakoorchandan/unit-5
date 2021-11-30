import React, { useState, useEffect } from "react";

function useTimeout(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setReady(true), delay);
    return () => clearInterval(timer);
  }, []);

  return ready;
}

function CustomHooks() {
  // false
  const isReady = useTimeout(2000);
  return (
    <div>
      {isReady && "Ready"}
      {!isReady && "Not Ready"}
      <h3>Custom Hooks</h3>
    </div>
  );
}

export default CustomHooks;
