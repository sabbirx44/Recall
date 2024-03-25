import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import PropTypes from "prop-types"

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

Dad.propTypes = {
    asset: PropTypes.string.isRequired
}

export default Dad;