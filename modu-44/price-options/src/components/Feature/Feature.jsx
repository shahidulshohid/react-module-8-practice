
import PropTypes from "prop-types";
import { GoCheckCircleFill } from "react-icons/go";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"><GoCheckCircleFill className="text-green-500"/>{feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string.isRequired,
}
export default Feature;