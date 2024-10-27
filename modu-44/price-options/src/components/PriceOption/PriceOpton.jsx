import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const Option = ({option}) => {
    const {name, price, features} = option
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold ">{price}</span>
                <price>/mon</price>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy now</button>
        </div>
    );
};

Option.propTypes = {
    option:PropTypes.object.isRequired,
}

export default Option;