const QUOTES = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Life is what happens when you are busy making other plans.', author: 'John Lennon' },
  { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
  { text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  { text: 'Whether you think you can or you think you cannot, you are right.', author: 'Henry Ford' },
  { text: 'The best time to plant a tree was twenty years ago. The second best time is now.', author: 'Chinese Proverb' },
  { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: 'Believe you can and you are halfway there.', author: 'Theodore Roosevelt' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'The only thing we have to fear is fear itself.', author: 'Franklin D. Roosevelt' },
  { text: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien' },
  { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { text: 'Happiness is not something ready made. It comes from your own actions.', author: 'Dalai Lama' },
  { text: 'The unexamined life is not worth living.', author: 'Socrates' },
  { text: 'That which does not kill us makes us stronger.', author: 'Friedrich Nietzsche' },
  { text: 'Imagination is more important than knowledge.', author: 'Albert Einstein' },
  { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'You miss one hundred percent of the shots you do not take.', author: 'Wayne Gretzky' },
  { text: 'It always seems impossible until it is done.', author: 'Nelson Mandela' },
  { text: 'Turn your wounds into wisdom.', author: 'Oprah Winfrey' },
  { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { text: 'What we think, we become.', author: 'Buddha' },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  { text: 'Do or do not. There is no try.', author: 'Yoda' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
  { text: 'Premature optimization is the root of all evil.', author: 'Donald Knuth' },
  { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
  { text: 'Any sufficiently advanced technology is indistinguishable from magic.', author: 'Arthur C. Clarke' },
  { text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { text: 'If you want to go fast, go alone. If you want to go far, go together.', author: 'African Proverb' },
  { text: 'Knowledge is power.', author: 'Francis Bacon' },
  { text: 'I think, therefore I am.', author: 'René Descartes' },
  { text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
  { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
  { text: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'Courage is not the absence of fear, but the triumph over it.', author: 'Nelson Mandela' },
  { text: 'A room without books is like a body without a soul.', author: 'Cicero' },
  { text: 'The pen is mightier than the sword.', author: 'Edward Bulwer-Lytton' },
  { text: 'Fortune favors the bold.', author: 'Virgil' },
  { text: 'Nothing in life is to be feared, it is only to be understood.', author: 'Marie Curie' },
  { text: 'Life is really simple, but we insist on making it complicated.', author: 'Confucius' },
  { text: 'The best revenge is massive success.', author: 'Frank Sinatra' },
  { text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
  { text: 'Injustice anywhere is a threat to justice everywhere.', author: 'Martin Luther King Jr.' },
  { text: 'The time is always right to do what is right.', author: 'Martin Luther King Jr.' },
  { text: 'Darkness cannot drive out darkness; only light can do that.', author: 'Martin Luther King Jr.' },
  { text: 'Education is the most powerful weapon which you can use to change the world.', author: 'Nelson Mandela' },
  { text: 'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' },
  { text: 'Try not to become a person of success, but rather try to become a person of value.', author: 'Albert Einstein' },
  { text: 'The measure of intelligence is the ability to change.', author: 'Albert Einstein' },
  { text: 'Happiness depends upon ourselves.', author: 'Aristotle' },
  { text: 'Knowing yourself is the beginning of all wisdom.', author: 'Aristotle' },
  { text: 'The more that you read, the more things you will know.', author: 'Dr. Seuss' },
  { text: 'Unless someone like you cares a whole awful lot, nothing is going to get better. It is not.', author: 'Dr. Seuss' },
  { text: 'It is never too late to be what you might have been.', author: 'George Eliot' },
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const countEl = document.getElementById('count');
const newBtn = document.getElementById('newBtn');
const copyBtn = document.getElementById('copyBtn');

let index = -1;
let copyTimer = null;

function pad(value) {
  return String(value).padStart(2, '0');
}

function showNext() {
  let next = index;
  while (next === index) {
    next = Math.floor(Math.random() * QUOTES.length);
  }

  index = next;
  const item = QUOTES[index];

  quoteEl.textContent = item.text;
  authorEl.textContent = `— ${item.author}`;
  countEl.textContent = `${pad(index + 1)} / ${QUOTES.length}`;

  quoteEl.classList.remove('in');
  void quoteEl.offsetWidth;
  quoteEl.classList.add('in');
}

function showCopied() {
  clearTimeout(copyTimer);
  copyBtn.textContent = 'Copied';
  copyBtn.classList.add('copied');
  copyTimer = setTimeout(() => {
    copyBtn.textContent = 'Copy';
    copyBtn.classList.remove('copied');
  }, 1600);
}

async function copyQuote() {
  const text = `"${QUOTES[index].text}" — ${QUOTES[index].author}`;

  try {
    await navigator.clipboard.writeText(text);
    showCopied();
    return;
  } catch (error) {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (copied) showCopied();
  }
}

newBtn.addEventListener('click', showNext);
copyBtn.addEventListener('click', () => {
  if (index >= 0) copyQuote();
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && event.target === document.body) {
    event.preventDefault();
    showNext();
  }
});

showNext();
