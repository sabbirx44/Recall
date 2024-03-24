import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-lg p-5 shadow-lg text-white text-center flex flex-col items-center gap-3'>
            <h2>
                <span className='text-5xl font-extrabold'>${price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='text-left flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature} />)
                }
            </div>
            <button className='bg-blue-600 px-4 py-2 rounded-sm shadow-lg hover:bg-blue-700 font-medium'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;