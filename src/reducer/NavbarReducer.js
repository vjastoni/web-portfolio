export const ACTIONS = {
  HOME: "home",
  ABOUT: "about",
  RESUME: "resume",
  PORTFOLIO: "portfolio",
  CONTACTS: "contacts",
};

const NavbarReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.HOME:
      return { initialState: true };
    case ACTIONS.ABOUT:
      return { initialState: true };
    case ACTIONS.RESUME:
      return { initialState: true };
    case ACTIONS.PORTFOLIO:
      return { initialState: true };
    case ACTIONS.PORTFOLIO:
      return { initialState: true };
    default:
      return { state };
  }
};

export default NavbarReducer;
