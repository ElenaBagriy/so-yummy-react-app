import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchQuery } from "redux/search/searchSlice";
import Input from "reusableComponents/Input/Input";

export const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSearchFormSubmit = e => {
        e.preventDefault();
        const query = e.target.search.value.trim();
        if (!query) {
            //   toast.warning('Type the query for search');
            return;
        };
        dispatch(updateSearchQuery(query));
        navigate(`/search/?query=${query}`);
  };
    
    return <div>Search
        <form onSubmit={onSearchFormSubmit}>
            <input
                name="search"
                type="text"
            />
            <button type="submit">Submit</button>
        </form>
        
    </div>
};