const today = new Date();

const openings = [
  "Well, hello there!",
  "Greetings, Earthlings!",
  "Pens at the ready!",
  "Hope you're ready for some inking!",
  "Beep! Boop! Time to ink!",
];

const topics = {
  1: "fish",
  2: "wisp",
  3: "bulky",
  4: "radio",
  5: "blade",
  6: "rodent",
  7: "fancy",
  8: "teeth",
  9: "throw",
  10: "hope",
  11: "disgusting",
  12: "slippery",
  13: "dune",
  14: "armor",
  15: "outpost",
  16: "rocket",
  17: "storm",
  18: "trap",
  19: "dizzy",
  20: "coral",
  21: "sleep",
  22: "chef",
  23: "rip",
  24: "dig",
  25: "buddy",
  26: "hide",
  27: "music",
  28: "float",
  29: "shoes",
  30: "ominous",
  31: "crawl",
};

const finishings = [
  "Hope you'll share your creations here.",
  "Draw on inkers!",
  "The journey is as important as the destination.",
  "There is no competition - show us what you made.",
];

function constructMessage() {
  return `${selectRandomFrom(
    openings
  )} It is the ${getDate()} of Inktober and today's theme is ${
    topics[today.getDate()]
  }. ${selectRandomFrom(finishings)}`;
}

function selectRandomFrom(selection) {
  return selection[Math.floor(Math.random() * selection.length)];
}

function getDate() {
  const day = today.getDate();
  let ending;
  switch (day) {
    case 1:
    case 21:
    case 31:
      ending = "st";
      break;
    case 2:
    case 22:
      ending = "nd";
      break;
    case 3:
    case 23:
      ending = "rd";
      break;
    default:
      ending = "th";
  }

  return `${day}${ending}`;
}

const params = {
  username: process.env.BOT_NAME,
  avatar_url: process.env.AVATAR_URL || "",
  content: constructMessage(),
};

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(params),
  });
};