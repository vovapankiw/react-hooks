import React, { useContext } from "react";

type IConfig = {
  contextName: string;
  providerName: string;
};

export const useContextWrapper = <T>(
  ReactContext: React.Context<T>,
  config: IConfig
) => {
  const context = useContext(ReactContext);
  const { contextName, providerName } = config;

  if (!context) {
    throw new Error(
      `Context ${contextName} must be used within ${providerName}`
    );
  }

  return context;
};
