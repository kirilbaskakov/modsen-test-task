const calcNewPage = (page: number, limit: number, newLimit: number): number => {
  return Math.ceil(((page - 1) * limit + 1) / newLimit);
};

export default calcNewPage;
