import Cousin from "../Cousin/Cousin";
import PropTypes from "prop-types"

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} asset={asset} />
                <Cousin name={'Sunehra'} />
            </section>
        </div>
    );
};

Uncle.propTypes = {
    asset: PropTypes.string.isRequired
}

export default Uncle;