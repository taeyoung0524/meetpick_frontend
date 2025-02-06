const getToken = () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("access_token", token);

      window.history.replaceState({}, document.title, window.location.pathname);
    } 
  };

export default getToken;
