import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className="textContainer wrapper">
                    <h1>Love in a Time of Allergies</h1>
                    <div className="iconTextDiv">
                        <p>Having a dinner party, but unsure of what to cook for your friends?</p>
                        <FontAwesomeIcon icon="bowl-food" className="bowlFood faIcon" /> 
                    </div> 
                    <div className="iconTextDiv">
                        <FontAwesomeIcon icon="utensils" className="utensils faIcon" /> 
                        <p>Concerned about creating the PERFECT dish for your allergy-stricken guests? Looking to experiment with your culinary options?</p>
                    </div> 
                    <div className="iconTextDiv">
                        <p>You're in the right place! Simply name a party, type in your guests' names, select their dietary restrictions, and our app will search for recipes that cater to everyone's tastes, no matter what they are!</p> 
                    </div> 
                    <p><FontAwesomeIcon icon="champagne-glasses" className="champageGlasses faIcon" /></p>
                    <div className="iconTextDiv">
                        <p>Hosting has never been as stress-free, simple, and easy, allowing you to focus on doing the things that you love!</p>
                    </div> 
                    <div className="iconTextDiv">
                        <p>After all, who doesn't want some Love In a Time Of Allergies?</p>
                    </div> 
                    <p><FontAwesomeIcon icon="heart" className="hearts faIcon" /></p>
                </div> 
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div> {/**END .wave */}
            </div> 
            
        </header>
    )
}

export default Header;