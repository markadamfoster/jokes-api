exports.handler = async event => {
  const allJokes = [
    {"id": 1, "type": "general", "setup": "Did you hear about the restaurant on the moon?", "punchline": "Great food, no atmosphere."},
    {"id": 2, "type": "general", "setup": "What did the janitor say when he jumped out of the closet?", "punchline": "Supplies!"},
    {"id": 3, "type": "general", "setup": "I'm reading a book on the history of glue.", "punchline": "I just can't seem to put it down."},
    {"id": 4, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 5, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 6, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 7, "type": "general", "setup": "Want to hear a joke about construction?", "punchline": "I'm still working on it."},
    {"id": 8, "type": "general", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 9, "type": "food", "setup": "Did you hear about the guy who invented Lifesavers?", "punchline": "He made a mint."},
    {"id": 10, "type": "general", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 11, "type": "general", "setup": "It's not that the man did not know how to juggle, he just didn't have the balls to do it.", "punchline": null},
    {"id": 12, "type": "general", "setup": "I'm glad I know sign language.", "punchline": "It's pretty handy."},
    {"id": 13, "type": "work", "setup": "Why did the invisible man turn down the job offer?", "punchline": "He couldn't see himself doing it."},
    {"id": 14, "type": "general", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 15, "type": "general", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 16, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 17, "type": "general", "setup": "I don't trust stairs because they're always up to something.", "punchline": null},
    {"id": 18, "type": "general", "setup": "Why did the bicycle fall over?", "punchline": "Because it was two-tired!"},
    {"id": 19, "type": "general", "setup": "Did you hear about the guy who invented Lifesavers?", "punchline": "He made a mint."},
    {"id": 20, "type": "general", "setup": "What's orange and sounds like a parrot?", "punchline": "A carrot."},
    {"id": 21, "type": "food", "setup": "I'm on a seafood diet.", "punchline": "I see food and I eat it."},
    {"id": 22, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 23, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 24, "type": "general", "setup": "What's brown and sticky?", "punchline": "A stick."},
    {"id": 25, "type": "general", "setup": "Did you hear about the guy who invented the knock-knock joke?", "punchline": "He won the 'no-bell' prize."},
    {"id": 26, "type": "general", "setup": "What's red and smells like blue paint?", "punchline": "Red paint."},
    {"id": 27, "type": "science", "setup": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", "punchline": null},
    {"id": 28, "type": "love", "setup": "I told my wife she should embrace her mistakes.", "punchline": "She gave me a hug."},
    {"id": 29, "type": "space", "setup": "How do you organize a space party?", "punchline": "You planet."},
    {"id": 30, "type": "general", "setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"id": 31, "type": "general", "setup": "I would tell you a joke about an elevator, but it's an uplifting experience.", "punchline": null},
    {"id": 32, "type": "general", "setup": "Why did the coffee file a police report?", "punchline": "It got mugged."},
    {"id": 33, "type": "general", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 34, "type": "science", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 35, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 36, "type": "food", "setup": "What do you call a fake noodle?", "punchline": "An impasta!"},
    {"id": 37, "type": "food", "setup": "What did the grape do when he got stepped on?", "punchline": "He let out a little wine!"},
    {"id": 38, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 39, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 40, "type": "general", "setup": "What's brown and sticky?", "punchline": "A stick."},
    {"id": 41, "type": "general", "setup": "Did you hear about the guy who invented the knock-knock joke?", "punchline": "He won the 'no-bell' prize."},
    {"id": 42, "type": "general", "setup": "What's red and smells like blue paint?", "punchline": "Red paint."},
    {"id": 43, "type": "science", "setup": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", "punchline": null},
    {"id": 44, "type": "love", "setup": "I told my wife she should embrace her mistakes.", "punchline": "She gave me a hug."},
    {"id": 45, "type": "space", "setup": "How do you organize a space party?", "punchline": "You planet."},
    {"id": 46, "type": "general", "setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"id": 47, "type": "general", "setup": "I would tell you a joke about an elevator, but it's an uplifting experience.", "punchline": null},
    {"id": 48, "type": "general", "setup": "Why did the coffee file a police report?", "punchline": "It got mugged."},
    {"id": 49, "type": "food", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 50, "type": "science", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 51, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 52, "type": "food", "setup": "What do you call a fake noodle?", "punchline": "An impasta!"},
    {"id": 53, "type": "food", "setup": "What did the grape do when he got stepped on?", "punchline": "He let out a little wine!"},
    {"id": 54, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 55, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 56, "type": "general", "setup": "What's brown and sticky?", "punchline": "A stick."},
    {"id": 57, "type": "general", "setup": "Did you hear about the guy who invented the knock-knock joke?", "punchline": "He won the 'no-bell' prize."},
    {"id": 58, "type": "general", "setup": "What's red and smells like blue paint?", "punchline": "Red paint."},
    {"id": 59, "type": "science", "setup": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", "punchline": null},
    {"id": 60, "type": "love", "setup": "I told my wife she should embrace her mistakes.", "punchline": "She gave me a hug."},
    {"id": 61, "type": "space", "setup": "How do you organize a space party?", "punchline": "You planet."},
    {"id": 62, "type": "general", "setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"id": 63, "type": "general", "setup": "I would tell you a joke about an elevator, but it's an uplifting experience.", "punchline": null},
    {"id": 64, "type": "general", "setup": "Why did the coffee file a police report?", "punchline": "It got mugged."},
    {"id": 65, "type": "food", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 66, "type": "science", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 67, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 68, "type": "food", "setup": "What do you call a fake noodle?", "punchline": "An impasta!"},
    {"id": 69, "type": "food", "setup": "What did the grape do when he got stepped on?", "punchline": "He let out a little wine!"},
    {"id": 70, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 71, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 72, "type": "general", "setup": "What's brown and sticky?", "punchline": "A stick."},
    {"id": 73, "type": "general", "setup": "Did you hear about the guy who invented the knock-knock joke?", "punchline": "He won the 'no-bell' prize."},
    {"id": 74, "type": "general", "setup": "What's red and smells like blue paint?", "punchline": "Red paint."},
    {"id": 75, "type": "science", "setup": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", "punchline": null},
    {"id": 76, "type": "love", "setup": "I told my wife she should embrace her mistakes.", "punchline": "She gave me a hug."},
    {"id": 77, "type": "space", "setup": "How do you organize a space party?", "punchline": "You planet."},
    {"id": 78, "type": "general", "setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"id": 79, "type": "general", "setup": "I would tell you a joke about an elevator, but it's an uplifting experience.", "punchline": null},
    {"id": 80, "type": "general", "setup": "Why did the coffee file a police report?", "punchline": "It got mugged."},
    {"id": 81, "type": "food", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 82, "type": "science", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 83, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 84, "type": "food", "setup": "What do you call a fake noodle?", "punchline": "An impasta!"},
    {"id": 85, "type": "food", "setup": "What did the grape do when he got stepped on?", "punchline": "He let out a little wine!"},
    {"id": 86, "type": "general", "setup": "Why did the scarecrow win an award?", "punchline": "Because he was outstanding in his field!"},
    {"id": 87, "type": "food", "setup": "I would avoid the sushi if I was you.", "punchline": "It's a little fishy."},
    {"id": 88, "type": "general", "setup": "What's brown and sticky?", "punchline": "A stick."},
    {"id": 89, "type": "general", "setup": "Did you hear about the guy who invented the knock-knock joke?", "punchline": "He won the 'no-bell' prize."},
    {"id": 90, "type": "general", "setup": "What's red and smells like blue paint?", "punchline": "Red paint."},
    {"id": 91, "type": "science", "setup": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.", "punchline": null},
    {"id": 92, "type": "love", "setup": "I told my wife she should embrace her mistakes.", "punchline": "She gave me a hug."},
    {"id": 93, "type": "space", "setup": "How do you organize a space party?", "punchline": "You planet."},
    {"id": 94, "type": "general", "setup": "Why don't skeletons fight each other?", "punchline": "They don't have the guts."},
    {"id": 95, "type": "general", "setup": "I would tell you a joke about an elevator, but it's an uplifting experience.", "punchline": null},
    {"id": 96, "type": "general", "setup": "Why did the coffee file a police report?", "punchline": "It got mugged."},
    {"id": 97, "type": "food", "setup": "I used to be a baker, but I couldn't make enough dough.", "punchline": null},
    {"id": 98, "type": "science", "setup": "I'm reading a book about anti-gravity.", "punchline": "It's impossible to put down!"},
    {"id": 99, "type": "general", "setup": "I used to play piano by ear, but now I use my hands.", "punchline": null},
    {"id": 100, "type": "food", "setup": "What do you call a fake noodle?", "punchline": "An impasta!"}
  ]
  
  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  const jokes = generateRandomNumbers().map(num => {
    return allJokes[num]
  })

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  return {
      statusCode: 200,
      headers,
      body: JSON.stringify(jokes),
  }
}


