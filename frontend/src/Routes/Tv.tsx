import { useEffect, useState } from 'react';

function Tv() {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log('useEffect');
    fetch("/api/react").then(res => res.text()).then(setText);

  }, []);

  console.log('랜더123');


  return (
    <h1>Tv: {text}</h1>
  );
}

export default Tv;