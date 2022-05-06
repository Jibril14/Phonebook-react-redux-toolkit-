import { nanoid } from "nanoid";
import propsType from "prop-types";

const Filter = ({ Changed }) => {
    const loginInputId = nanoid();

    return (
        <>
            <label htmlFor={loginInputId}>Search contacts by name </label>
            <input
                type="text"
                name="filter"
                placeholder="Search.."
                id={loginInputId}
                onChange={Changed}
            />
        </>
    );
};

export default Filter;

Filter.propsType = {
    Changed: propsType.func
};
