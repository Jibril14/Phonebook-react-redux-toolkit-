import { nanoid } from "nanoid";

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
