import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [quest, setQuest] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Frequently asked questions about login</h3>
        <div>
          {quest.map((q) => {
            return <SingleQuestion {...q} key={q.id} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
