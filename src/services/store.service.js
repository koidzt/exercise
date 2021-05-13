export const storeLoadState = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    } else {
      try {
        return JSON.parse(atob(serializedState));
      } catch (error) {
        if (error.code === 5) {
          return JSON.parse(serializedState);
        }
      }
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const storeSaveState = (state) => {
  const serializedState = JSON.stringify(state);
  try {
    //  localStorage.setItem("store", btoa(serializedState));
    localStorage.setItem("store", serializedState);
  } catch (error) {
    if (error.code === 5) {
      localStorage.setItem("store", serializedState);
    }
  }
};

//access token is token for specify user data in web
export const storeGetAccessToken = () => {
  const state = storeLoadState();
  if (state === undefined) return state;

  return state?.user?.token;
};

export const newState = (state) => JSON.parse(JSON.stringify(state));
