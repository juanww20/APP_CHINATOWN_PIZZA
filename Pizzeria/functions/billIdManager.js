let currentBillId = 1;

const getAndIncrementBillId = () => {
  const billId = currentBillId;
  currentBillId++;
  return billId;
};

export { getAndIncrementBillId };