export const getLivePrice = (basePrice, apmcName, type = 'avg') => {
  if (!apmcName) return basePrice;
  
  // Deterministic offset based on APMC name
  const hash = apmcName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const day = new Date().getDate();
  const offsetPercent = ((hash % 10) - 5 + (day % 4)) / 100; // -5% to +8% variation
  
  let price = basePrice * (1 + offsetPercent);
  if (type === 'min') price = price * 0.85;
  if (type === 'max') price = price * 1.15;
  
  return Math.round(price / 10) * 10; // Round to nearest 10
};
