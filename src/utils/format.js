/**
 * Formatea un número al formato de moneda Pesos Colombianos (COP).
 * @param {number} amount - El valor numérico a formatear.
 * @returns {string} El valor formateado (ej: $ 1.500,00).
 */
export const formatCOP = (amount) => {
  if (typeof amount !== 'number') return amount; // Maneja casos donde no es un número

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0, // Generalmente, COP no usa decimales para montos grandes.
  }).format(amount);
};