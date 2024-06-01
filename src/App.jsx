import { useState } from "react";
import './App.css'
function App() {
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only thing worse than being blind is having sight but no vision. – Helen Keller",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The best way to predict the future is to create it. – Peter Drucker",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. – Jordan Belfort",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The secret of getting ahead is getting started. – Mark Twain",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "A person who never made a mistake never tried anything new. – Albert Einstein",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the middle of difficulty lies opportunity. – Albert Einstein"
  ];

  const [quote, setRandomQuote] = useState(["Quotes Generator"])

  const handleQuote = () => {
    let randomNumber = Math.round(Math.random() * quotes.length);
    setRandomQuote(quotes[randomNumber])
  }

  return (
    <>
    <section>
        <div class="container">
          <div className="quote">
            <h2>{quote}</h2>
          </div>
        </div>
        <button class="btn" onClick={handleQuote}>Generate Quote</button>
    </section>
    </>
  )
}
export default App;