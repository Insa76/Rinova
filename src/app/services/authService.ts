const AUTH_KEY = "rinova-auth";

export const authService = {
  login(
    username: string,
    password: string
  ) {
    if (
      username === "admin" &&
      password === "rinova2026"
    ) {
      localStorage.setItem(
        AUTH_KEY,
        "true"
      );

      return true;
    }

    return false;
  },

  logout() {
    localStorage.removeItem(
      AUTH_KEY
    );
  },

  isAuthenticated() {
    return (
      localStorage.getItem(
        AUTH_KEY
      ) === "true"
    );
  },
};