export const logoutUser = () => {
  localStorage.removeItem("userInfo");
  window.location.href = "/login";
};
