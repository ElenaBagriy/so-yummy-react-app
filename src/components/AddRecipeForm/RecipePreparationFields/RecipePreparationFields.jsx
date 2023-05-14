import { ErrorMessage } from '@hookform/error-message';
import { Error, StyledPreparation, Textarea, Title } from './RecipePreparationFields.styled';
import PropTypes from 'prop-types';

export const RecipePreparationFields = ({
  register,
  control,
  errors
}) => {

  return (
    <StyledPreparation>
      <Title>Recipe Preparation</Title>
      <label>
        <Textarea
          isError={errors.instructions}
          placeholder="Enter recipe"
          name="instructions"
          control={control}
          {...register('instructions')}
        />
        <ErrorMessage
          errors={errors}
          name={`instructions`}
          render={({ message }) => <Error>{message}</Error>}
        />
      </label>
    </StyledPreparation>
  );
};

RecipePreparationFields.propTypes = {
  register: PropTypes.func,
  control: PropTypes.object,
  errors: PropTypes.object,
};
