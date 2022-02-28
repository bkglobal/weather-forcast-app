export const getUTCTimestamp = (date?: Date) => {
  if(!date) return Math.floor(Date.now() / 1000);
  return Math.floor((new Date(date).getTime() / 1000));
};
