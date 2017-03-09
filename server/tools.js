const currentTimestamp = () => {
  const date = new Date();
  const timestamp = Math.floor(date.getTime() / 1000);

  return timestamp;
}

export {currentTimestamp}
