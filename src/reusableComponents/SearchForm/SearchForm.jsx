import { Button, Form, HelperText, Input } from "./SearchForm.styled";
import { useForm } from 'react-hook-form';

export const SearchForm = ({ value, onSearchFormSubmit, color }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = data => {
        const query = data.search.trim();
        onSearchFormSubmit(query);
    };

    return <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="search"
                type="text"
                defaultValue={value}
                {...register('search', { required: true })}
                placeholder="Enter the text"
            />
            <Button type="submit" $color={color}>Search</Button>
            {errors.search && <HelperText>Please, type something</HelperText>}
        </Form>
    </>
};