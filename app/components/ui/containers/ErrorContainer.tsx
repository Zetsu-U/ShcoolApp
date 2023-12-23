import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { IContainer } from "./container.interface";
import cn from "classnames";

const ErrorContainer: FC<PropsWithChildren<IContainer>> = ({children, className, ...rest}) => {
  return (
    <View {...rest} className={cn(`bg-yellow/20 rounded-lg p-4 w-full flex items-center justify-center`, className)}>
      {children}
    </View>
  );
};

export default ErrorContainer;