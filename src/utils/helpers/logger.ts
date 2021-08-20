const log = (...data: any) => {
  if (process.env.REACT_APP_DEVELOPMENT) {
    console.log(data);
  }
};

export default log;
