import PropTypes from 'prop-types';
import Special from '../Special/Special';

const Myself = ({ asset }) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Special asset={asset} />
            </section>
        </div>
    );
};

Myself.propTypes = {
    asset: PropTypes.string.isRequired
};

export default Myself;