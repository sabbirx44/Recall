import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Has the {asset}</p>
            <p>Also has the {gift}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string.isRequired
};

export default Special;