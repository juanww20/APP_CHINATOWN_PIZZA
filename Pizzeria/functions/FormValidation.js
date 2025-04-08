import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validationErrors = validate(formData);
    setErrors(validationErrors || {});
    setIsFormValid(Object.keys(validationErrors || {}).length === 0);
  }, [formData, validate]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setIsFormValid(false);
  };

  return {
    formData,
    errors,
    isFormValid,
    handleInputChange,
    handleDropdownChange,
    resetForm,
    setFormData,
  };
};

export default useFormValidation;