import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = validate(formData);
    setIsFormValid(isValid);
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
    setIsFormValid(false);
  };

  return {
    formData,
    isFormValid,
    handleInputChange,
    handleDropdownChange,
    resetForm,
    setFormData,
  };
};

export default useFormValidation;