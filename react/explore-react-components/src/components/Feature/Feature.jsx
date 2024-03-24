import PropTypes from 'prop-types';
import { IoCheckmarkOutline } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='mb-2 inline-flex items-center gap-2'><IoCheckmarkOutline /> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;