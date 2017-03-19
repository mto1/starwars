var quotes = [
'When 900 years old, you reach... Look as good, you will not.'
 'The Dark Side of the Force is the pathway to many abilities some consider to be... Unnatural.',
 'I sense great fear in you, Skywalker. You have hate...  you have anger... but you don\'t use them.',
 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.',
 'Aren\'t you a little short for a storm trooper ?',
 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.',
 'Your focus determines your reality',
 'Do. Or do not. There is no try.',
 'In my experience there is no such thing as luck.',
 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice',
 'The Force is strong with this one.'
]    
  function NewQuote(){
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];  
	      }
    