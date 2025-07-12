export const naviName = {
  Login: 'Login',
  HomeScreen: 'HomeScreen',
  AuthNavi: 'AuthNavi',
  Splash: 'Splash',
} as const;

export type NaviName = typeof naviName[keyof typeof naviName];
