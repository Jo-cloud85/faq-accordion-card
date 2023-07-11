import { useState } from "react"
import { questions } from "./questions-list"
import SingleQns from "./single-question";

function App() {

  const [allQns] = useState(questions)

  return (
    <div className="container">
      <article className="image"></article>

      <article className="questions">
        {allQns.map((qns, index) => (
          //Using spread operator where it takes all the values inside each object 'qns' and pass them into the SingleQns component
          <SingleQns key = {index} {...qns} />
        ))}
      </article>
    </div>
  );
}

export default App;