export const createThunk = (
  type,
  func,
  messageState
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return ((param) => async(dispatch) => {
    dispatch({ type, param });  //시작

    try {
      const { res: { data }, updateData } = await func(param);

      if (updateData) {  //단순 업데이트였으면
        await dispatch({ type: SUCCESS, payload: updateData })
      } else {
        await dispatch({ type: SUCCESS, payload: data });
      }
      
      if (messageState) {
        alert(data.description);
      }
      return data;
    } catch (e) {
      console.log(e);
      dispatch({ type: ERROR, payload: e });  //실패
    }
  });
}