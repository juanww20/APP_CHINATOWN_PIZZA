export const validateOrderForm = (formData) => {
    const errors = {};
    
    if (!formData.nombre?.trim()) {
        errors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.telefono?.trim()) {
        errors.telefono = 'El teléfono es requerido';
      } else {
        // Elimina cualquier carácter que no sea número (por si acaso)
        const cleanPhone = formData.telefono.replace(/\D/g, '');
        
        // Validación para números venezolanos
        const phoneRegex = /^(0414|0424|0412|0426|0416)\d{7}$/;
        
        if (!phoneRegex.test(cleanPhone)) {
          errors.telefono = 'Debe comenzar con 0414, 0424, 0412, 0426 o 0416 y tener 11 dígitos';
        }
      }

    // Validación para tipo de orden
    if (!formData.tipoOrden) return false;
    
    if (formData.tipoOrden === 'Delivery') {
        if (!formData.calle?.trim()) {
            errors.calle = 'La dirección es requerida';
        }
        if (!formData.referencias?.trim()) {
        errors.referencias = 'Las referencias son requeridas';
        }
        if (!formData.zona) return false;
    }
    
    return errors;
};