export const validateOrderForm = (formData) => {
    const errors = {};
    
    // Validaciones comunes para ambos tipos de orden
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
    if (!formData.tipoOrden) {
        errors.tipoOrden = 'El tipo de orden es requerido';
    } else if (formData.tipoOrden === 'Delivery') {
        // Validaciones solo para Delivery
        if (!formData.direccion?.trim()) {
            errors.direccion = 'La dirección es requerida';
        }
        if (!formData.referencia?.trim()) {
            errors.referencia = 'Las referencias son requeridas';
        }
        if (!formData.zona) {
            errors.zona = 'La zona es requerida';
        }
    }
    // No se requieren validaciones adicionales para Pick-Up
    
    return errors;
};