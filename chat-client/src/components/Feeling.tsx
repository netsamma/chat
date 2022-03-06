import React, { useCallback, useState } from 'react';

export interface IFeelingFormProps {
  name: string;
  onSubmit: (feelingUpdate: string) => void;
}

const FeelingForm: React.FC<IFeelingFormProps> = ({ name, onSubmit }) => {
  const [currentFeeling, setCurrentFeeling] = useState('');

  const onFeelingChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentFeeling(event.currentTarget.value);
    },
    []
  );

  const onSubmitEvent = useCallback(() => {
    onSubmit(`${name} is feeling: ${currentFeeling}`);
  }, [name, currentFeeling]);

  return (
    <form onSubmit={onSubmitEvent}>
      <label htmlFor="feeling-input">How are you feeling?</label>
      <input
        id="feeling-input"
        onChange={onFeelingChange}
        value={currentFeeling}
      />
      <button type="submit">Send feeling</button>
    </form>
  );
};

export default FeelingForm;


// https://blog.harveydelaney.com/integrating-react-components-into-an-angular-2-project/
// PropsWithChildren<IFeelingFormProps>) => boolean' is not assignable to type 'FC<IFeelingFormProps>'
// https://stackoverflow.com/questions/66871026/react-with-typescript-functional-component-type-boolean-is-not-assignable
