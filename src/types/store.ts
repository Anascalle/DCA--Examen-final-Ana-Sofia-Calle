export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: string
};

export enum Dashboardactions {
  "NAVIGATE" = "NAVIGATE",
}

export interface XAction {
  action: screen.NAVIGATE;
  payload: Pick<AppState, "something">;
}

export type Actions =Dashboardactions;
