const fact = [
    "My favorite singer is Arvil Lavine.",
    "I'm born in 1994.",
    "I can bend my thumbs very far back.",
    "10 of my finger prints are rounded. We call that 'hoa tay' (flower of the finger) in Viet Nam.",
    "I don't like strong wind, I think it makes me sick."
]

let promptFact = document.querySelector('button');
let responeFact = document.getElementById('response-fact');
promptFact.onclick = function() { 
  responeFact.innerHTML = fact[Math.floor(Math.random() * fact.length)];
};

