export const getTagOptions = (tags) => {
  return tags.map((tag) => ({ value: tag.id, label: tag.data().name }));
};
