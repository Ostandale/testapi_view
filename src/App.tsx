import { useState } from "react";
import "./App.css";

function submitJson() {
  // 構造体 MessageData のデータ
  const messageData = {
    message: "Hello, world!",
    send_user_id: 1,
    reci_user_id: 2,
  };

  // JSONデータをサーバーにPOST送信
  fetch("http://localhost:3000/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={submitJson}>Submit JSON</button>
    </>
  );
}

export default App;
