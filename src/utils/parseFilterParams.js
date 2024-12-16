const parseIsFavourite = (favourite) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const isFavourite = (type) => ['true', 'false'].includes(type);
  if (isFavourite(favourite)) return favourite;
};

const parseContactType = (type) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isContactType(type)) return type;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;
  console.log(isFavourite);

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(type);

  return {
    isFavourite: parsedIsFavourite,
    type: parsedContactType,
  };
};
