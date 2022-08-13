import React, { useEffect, useState } from "react";

function useName(name) {
  const [newName, setNewName] = useState("");

  useEffect(() => {
    switch (name) {
      case "ho-oh":
        setNewName("Ho-oh");
        break;
      case "porygon-z":
        setNewName("Porygon-Z");
        break;
      case "farfetchd":
        setNewName("Farfetch'd");
        break;
      case "mr-mime":
        setNewName("Mr. Mime");
        break;
      case "mr-rime":
        setNewName("Mr. Rime");
        break;
      default:
        name = name.split("-")[0];
        name = name.charAt(0).toUpperCase() + name.slice(1);
        setNewName(name);
        break;
    }
  }, []);
  return newName;
}

export default useName;
