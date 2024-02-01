const findLongestWord = (wordsArray) => {
  let wordAndLength = wordsArray.map((word) => {
    return { mot: word, longueur: word.length };
  });

  let word = wordAndLength.reduce((accumulator, currentValue) =>
    accumulator.longueur > currentValue.longueur ? accumulator : currentValue
  );

  return word;
};

let words = ["ggggg", "gg", "ggg", "gggg"];
console.log(findLongestWord(words));

const nbOccurence = (lettersArray) => {
  let flatArray = lettersArray.flat(Infinity);

  let occurences = flatArray.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue] == undefined) {
      accumulator[currentValue] = 1;
    } else {
      accumulator[currentValue] = accumulator[currentValue] + 1;
    }
    return accumulator;
  }, {});
  //argument theni mtaa reduce method howa valeur initiale mtaa accumulator
  return occurences;
};
const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(nbOccurence(input));

const totalMarks = (studentsArray) => {
  let marksAdded = studentsArray.map((s) => {
    if (s.marks < 50) s.marks = s.marks + 15;
    return s;
  });
  console.log(marksAdded);
  let marksFiltred = marksAdded.filter((s) => {
    console.log(s);
    if (s.marks > 50) return s;
  });
  const initialValue = 0;
  return marksFiltred.reduce(
    (accumulator, currentValue) => accumulator + currentValue.marks,
    initialValue
  );
};

let students = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];
console.log(totalMarks(students));
// var tab=[{id:1,nom:"fatma"},{id:2,nom:"zahra"}]
// tab.push({id:3,nom:"benhaj"})
// console.log(tab)
