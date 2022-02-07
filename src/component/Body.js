import classes from '../res/layout/body.module.css';
import { useState, useEffect } from 'react';

//import all image
function importAll(r) {
 let images = {};
    r.keys().forEach((item, index) => { 
    images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../res/img', false, /\.(png|jpe?g|svg)$/));

const gitRandomImg = () => {
            const allImage = [...Object.keys(images)];

            let randomArr = [];
            let randomNum = () => Math.floor(Math.random() * (allImage.length -1) +1);
            
            if(randomArr.length < 3) {
            for(let i = randomArr.length-1; i <= 3; i++) {
                randomArr.push(randomNum());
            }
        }
        
        check();
        //chech there are nolt like
        function check (){
            randomArr.forEach((r, index) => {
            for(let i = 0; i<=randomArr.length-1;i++) {
                if(i !== index) {
                if(r === randomArr[i]) {
                    randomArr.splice(index, 1);
                    randomArr.splice(i, 1);
                    randomArr.push(randomNum());
                    check();
                }
            }
        }
        })
        };
        if(randomArr.length < 4) randomArr.push(randomNum);
        return randomArr;
        }
let clickedPoke = [];


const gitTheNameOfImage = (img) => {
       return img.slice(img.indexOf('p'), img.indexOf('.'))
}

const onReander = () => {
    let randomImg = [];
    let randomSrc = [];
       const randomArr = gitRandomImg();
        randomImg = [];
        if(randomArr.length > 4) randomArr.shift();
        randomArr.forEach((r, i) => randomImg.push(`poke-${r}.png`));
        
        randomImg.forEach(img => {
            randomSrc.push({'img' : `${images[img]}`});
        });
        return randomSrc;
   }


const Body = () => {
    
    let [round, setRound] = useState(0);   //count for 6 turn 
    let [result, setResult] = useState(false);  // change the view in the end of the game
    let renderImage = onReander();
    let [score, setScore] = useState(0);
    let [isItin, setIsItIn] = useState(false);
    let [bestScore, setBestScore] = useState(0);
                

    
    //let [imgesRes, setImages] = useState(randomSrc);
    const turn = (e) => {
            setRound(round += 1);
            let clickedImage = e.target.id;
            clickedPoke.push(clickedImage);
            for(let i =0; i<= clickedPoke.length-1; i++) {
                for(let j = i + 1; j <= clickedPoke.length-1; j++) {
                    if(clickedPoke[i] === clickedPoke[j]) {
                        setIsItIn(true);
                        clickedPoke.splice(i, 1);
                    }
                    
                }
            }
            if(isItin === false) {
                setScore(score += 1);
                
            }
            if(isItin === true){
                setScore( score -= 1);
                setIsItIn(false);

            }
          

    }

    useEffect(()=> {
        
        const makeResult = () => {
        if(round === 6) setResult(true);  
        }
        makeResult();
        
    });

    useEffect(() => {
        const makeBestScore = () => {
            if(score > bestScore) setBestScore(score);
        }
        
        return makeBestScore();
    }, [score, bestScore])
    
    const continueGame = () => {
        clickedPoke = [];
        setRound(0);
        setResult(false);
    }
    const resetGame = () => {
        clickedPoke = [];
        setScore(0);
        setBestScore(0);
        setRound(0);
        setResult(false);
    }
    if(result === false) {
    return(
        <div className={classes.body}>
            <div className={classes.infoText}>Get points by clicking on an image but don't click on any more than once!</div>
            <div className={classes.scoreContainer}>
                <div className={classes.score} id='score'>Score: {score}</div>
                <div className={classes.bestScore} id='bestScore'>Best Score: {bestScore}</div>
            </div>
            <div className={classes.cardContainer}>
                    <div className={classes.card} onClick={turn}>
                        <img src={renderImage[0].img}
                        id={gitTheNameOfImage(renderImage[0].img)} alt='test-img'/>
                    </div>
                    <div className={classes.card} onClick={turn}>
                        <img src={renderImage[1].img} 
                        id={gitTheNameOfImage(renderImage[1].img)} alt='test-img'/>
                    </div>
                    <div className={classes.card} onClick={turn}>
                        <img src={renderImage[2].img} 
                        id={gitTheNameOfImage(renderImage[2].img)} alt='test-img'/>
                    </div>
                    <div className={classes.card} onClick={turn}>
                        <img src={renderImage[3].img} 
                        id={gitTheNameOfImage(renderImage[3].img)} alt='test-img'/>
                    </div>
            </div>
        </div>
    );
    }else {
        return(
            <div className={classes.resultContainer}>
                <div className={classes.resultTxt}>Congratulations your score is 
                : <span>{score}</span> </div>
                 <div className={classes.resultTxt}>The best score until now is 
                 : <span>{bestScore}</span></div>
                 <div className={classes.buttonContainer}>
                     <button onClick={continueGame}>Continue</button>
                     <button onClick={resetGame}>Reset</button>
                 </div>
            </div>
        )
    }
    
}
export default Body;