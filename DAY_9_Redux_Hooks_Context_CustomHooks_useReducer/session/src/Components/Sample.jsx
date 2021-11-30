import { useState, useEffect } from "react";

function useDelay(delay) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return render;
}

function Sample() {
  const delay = useDelay(2);

  if (!delay) {
    return null;
  }

  return (
    <center>
      <h1>Rendered After Two seconds </h1>
    </center>
  );
}

export default Sample;
