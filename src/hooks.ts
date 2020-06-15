import { useState, useEffect } from "react";

const useFetch = (url:string):[string,boolean] => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    fetch(url).then( response => {
      response.text().then( text => setData(text))
      setLoading(false);
    })
  }
  useEffect(() => {
    fetchUrl();
  });
  return [data, loading];
}

function useKeyPress(targetKey:(string|number)) {
  // State for keeping track of whether key is pressed
  // const [keyPressed, setKeyPressed] = useState(false);
  const [keyPresses, setKeyPresses] = useState(0);

  // If pressed key is our target key then set to true
  function downHandler({ key, keyCode }:{key:string, keyCode:number}) {
    if ((key === targetKey) || (keyCode === targetKey)){
      // setKeyPressed(true);
      setKeyPresses(keyPresses + 1)
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key, keyCode }:{key:string, keyCode:number}) => {
    // if ((key === targetKey) || (keyCode === targetKey)){
    //   setKeyPressed(false);
    // }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount

  return keyPresses;
}
export { useFetch, useKeyPress };
