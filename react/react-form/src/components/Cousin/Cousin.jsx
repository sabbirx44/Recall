import PropTypes from 'prop-types';
import Special from "../Special/Special";
import Friend from '../Friend/Friend';


const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h2>{name}</h2>
            <section className="flex">
                {asset && <Special asset={asset} />}
                {name === 'Borsha' && <Friend />}
            </section>
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired
};

export default Cousin;
