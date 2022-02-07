import classes from '../res/layout/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCoffee);



const Footer = () => {
    const goToLink = (target) => {
        const link = {
            github : 'https://github.com/u31999',
            linkedin : 'https://www.linkedin.com/in/ahmed-hassan-elzain/'
        }
        if(target === 'github') window.open(link.github, '_blank');
        if(target === 'linkedin') window.open(link.linkedin, '_blank');
    }
    return(
        <div className={classes.footer}>
            <div>Copyright © Ahmed Hassan</div>
            <div className={classes.icon}>
                <div className={classes.icon}>
                        <FontAwesomeIcon icon={['fab', 'github-square']} id = 'github' className={classes.theIcon} onClick={() => goToLink('github')}/>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} id = 'linkdin' className={classes.theIcon} onClick={() => goToLink('linkedin')}/>
                    </div>
            </div>
        </div>
    )
}

export default Footer;