export const formatCurrencyInBTD = (amount: number = 0) => {
  const formattedAmount = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `৳ ${formattedAmount}`;
  // return new Intl.NumberFormat('bn-BD', {
  //     style: 'currency',
  //     currency: 'BDT',
  // }).format(amount);
};
