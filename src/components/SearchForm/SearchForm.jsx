import { Button, Form, HelperText, Input } from "./SearchForm.styled";
import { useForm } from 'react-hook-form';

export const SearchForm = ({ value, onSearchFormSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = data => {
        const query = data.search.trim();
        if (!query) return;
        onSearchFormSubmit(query);
    };

    return <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="search"
                type="text"
                defaultValue={value}
                {...register('search')}
                placeholder="Enter the text"
            />
            <Button type="submit">Search</Button>
            {errors.search && <HelperText>Please, type something</HelperText>}
        </Form>
    </>
};