import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className='hover:bg-slate-300 rounded-sm px-2'><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired // You can adjust the prop type based on the actual type of 'route'
};

export default Link;