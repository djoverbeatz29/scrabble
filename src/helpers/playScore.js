import letterData from './letterData';

export default function playScore(myWords, isBingo) {
    let totalScore=isBingo?50:0;
    for (const word of myWords) {
        let [score,multiplier]=[0,1];
        for (const tile of word) {
            const [bonus, letter]=[tile.bonus, tile.letter];
            const wordMultiplier=bonusWord(bonus);
            const letterVal=letterData[letter].value;
            const letterMultiplier=bonusLetter(bonus);
            multiplier*=wordMultiplier;
            score+=letterVal*letterMultiplier;
        }
        totalScore+=score*multiplier;
    }
    return totalScore;
}