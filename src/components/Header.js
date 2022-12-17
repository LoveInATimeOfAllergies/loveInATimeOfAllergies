import '../headerFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header>
            <h1>Love in a Time of Allergies</h1>
            <p>Having a dinner party, but unsure of what to cook for your friends? Concerned about creating the PERFECT dish for your allergy-stricken guests? Looking to experiment with your culinary options?</p>
            <p>You're in the right place! Simply name a party, then type in your guest names, alongside their dietary restrictions, and our app will search for recipes that cater to everyone's tastes, no matter what they are!</p>
            <p>Hosting has never been as stress-free, simple, and easy, allowing you to focus on doing the things that you love!</p>
            <p>After all, who doesn't want Love In a Time Of Allergies?</p>
            <p><FontAwesomeIcon icon="heart" className="hearts" /></p>
        </header>
    )
}

export default Header;