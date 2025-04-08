const generateInvoiceMessage = (
  clientInfo,
  billId,
  cart,
  selectedPaymentMethod
) => {
  // Formatear los items del carrito
  const itemsList = Object.values(cart)
    .map(
      (item) =>
        `• ${item.name} x${item.quantity} - $${item.price * item.quantity} ($${item.price} c/u)`
    )
    .join("\n");

  // Crear el mensaje completo
  return (
    `🐉 *CHINATOWN PIZZA* 🐉\n` +
    `📄 *Factura id: #${billId}*\n\n` +
    `👤 *Información del Cliente*\n` +
    `• Orden: ${clientInfo.orden || "No especificado"}\n` +
    `• Nombre: ${clientInfo.nombre || "No especificado"}\n` +
    `• Teléfono: ${clientInfo.telefono || "No especificado"}\n` +
    `• Ubicación: ${clientInfo.ubicacion || "No especificado"}\n\n` +
    `🛒 *Detalles del Pedido*\n${itemsList}\n\n` +
    `💰 *Total: $${Object.values(cart).reduce((acc, item) => acc + (item?.price || 0) * (item?.quantity || 0), 0)}*\n\n` +
    `💳 *Método de Pago: ${selectedPaymentMethod || "No seleccionado"}*\n\n` +
    `¡Gracias por su compra!`
  );
};

export { generateInvoiceMessage };
