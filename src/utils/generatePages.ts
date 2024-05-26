const generatePages = (page: number, maxPages: number, limit: number) => {
  if (maxPages < limit) {
    return Array(maxPages)
      .fill(0)
      .map((_, ind) => ind + 1);
  }
  let start = Math.max(1, page - 1);
  let end = start + limit - 1;
  if (start + limit >= maxPages) {
    end = Math.min(maxPages, start + 3);
    start = end - limit + 1;
  }
  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
};

export default generatePages;
