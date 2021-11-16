export const createThunk = (
  type,
  func,
  pushOption,
  path
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return ((param) => async(dispatch) => {
    dispatch({ type, param });  //시작
    try {
      const payload = await func(param);
      const payloadData = payload.payloadData || payload.res.data.data;

      if (payload.res.data.code === 200) {
        dispatch({ type: SUCCESS, payload: payloadData });  //성공
        if (pushOption === true) {
          window.location.replace(path);
        }
      } else if (payload.res.data.code === 403) {
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: ERROR, payload: e });  //실패
    }
  });
}