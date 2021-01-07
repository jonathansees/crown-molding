import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledCheckboxItem from './CheckboxItem.styled';

const CheckboxItem = (props) => {
  const {
    checked,
    onChange,
    ...restProps
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);

    onChange({
      target: {
        ...props,
        checked: !isChecked,
      },
    });
  };

  return (
    <StyledCheckboxItem
      type="checkbox"
      checked={isChecked}
      onClick={() => handleChange()}
      {...restProps}
    />
  );
};

CheckboxItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxItem.defaultProps = {
  checked: false,
  onChange: {},
};

export default CheckboxItem;
