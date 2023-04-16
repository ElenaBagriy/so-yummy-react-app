import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchQuery } from "redux/search/searchSlice";
import { Button, Form, Input } from "./Search.styled";

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
        <Form onSubmit={onSearchFormSubmit}>
            <Input
                name="search"
                type="text"
                placeholder="Enter the text"
            />
            <Button type="submit">Submit</Button>
        </Form>
    </div>
};