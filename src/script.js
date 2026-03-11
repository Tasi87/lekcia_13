//idea	Modulárne programovanie

//	imports:
//note pre Menný export:
// import { score, lifes, superFunction } from "./startgame.js"
//note pre Default export:
import setGame from "./startgame.js"


console.log(setGame.score);
console.log(setGame.lifes);

const score = 10;

console.log(setGame.score);	// 0
console.log(score);				// 10