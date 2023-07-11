import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

export default function SingleQns({question, answer}) {
  
  const [showAnswer, setShowAnswer] = useState(false)
  
  return (
    <>
      <div className='article-question'>
        <article onClick={() => setShowAnswer(!showAnswer)}>
            <h2 className={`${showAnswer && 'clicked' }`}>{question}</h2>
            {showAnswer ? <FaChevronUp className='icon'/> : <FaChevronDown className='icon'/>}
        </article>
        {showAnswer && <p>{answer}</p>}
      </div>
    </>
  )
}