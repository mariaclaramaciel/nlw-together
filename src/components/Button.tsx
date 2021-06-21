import { useState } from "react";

export function Button() {
    const [contador, setContador] = useState(0)

    function somar() {
        setContador(contador +1)
    }

    return (
      <button onClick={somar}>{contador}</button>
    );
  }
  
