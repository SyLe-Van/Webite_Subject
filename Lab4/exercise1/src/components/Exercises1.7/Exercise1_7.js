import { useState } from "react";
import useMessages from "./useMessages";
export default function Exercise1_7() {
  const [forum, setForum] = useState("nasa");
  const {
    data: messages,
    loading: messagesLoading,
    error: messagesError,
  } = useMessages(forum);
  return (
    <div className="App">
      <button onClick={() => setForum("nasa")}>NASA</button>
      <button onClick={() => setForum("notNasa")}>Not NASA</button>
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">{messagesError.message}</div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        "No messages"
      )}
    </div>
  );
}
