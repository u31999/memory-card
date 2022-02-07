import classes from '../res/layout/info.module.css';


const Info = () => {
    
    const createInfoPage = () => {
        const arrayOfInfo = [
            'These is a game to make your memory better',
            "Git point's by clicking on image",
            'If you clicked on image more than once you lose point',
            'The game is six round and then you get the reult',
            'These is a Beta version of the game there in no-level in these version'
        ];
        const infoPage = document.createElement('div');
        const listCntainer = document.createElement('ul');


        document.body.append(infoPage);
        infoPage.append(listCntainer);

        infoPage.className = `${classes.infoPage}`;
        listCntainer.className = `${classes.listCntainer}`;

        arrayOfInfo.forEach(info => {
           let li = document.createElement('li');
            li.innerText = info + '.';
            listCntainer.append(li);
        });

        const closeBtn = document.createElement('div');
        closeBtn.className = `${classes['close-btn']}`;
        const btn = document.createElement('button');
        btn.innerText = 'Close';
       
        infoPage.append(closeBtn);
        closeBtn.append(btn);

        closeBtn.addEventListener('click', () => infoPage.remove());


        const makerInfo = document.createElement('div');
        makerInfo.className = `${classes['maker-info']}`
        infoPage.append(makerInfo);
        makerInfo.innerText = 'These game is made by Ahmed Hassan';
        makerInfo.addEventListener('click', () => {
            window.open('https://github.com/u31999', '_blank')
            });
            
        
    }

    return (
        <button className={classes.infoIcon} onClick= {createInfoPage}>INFO</button>
    )
}

export default Info;