import { hooks } from "@Utils";
import React from "react";
interface PropsI {
  children: React.ReactNode;
}

function ContextContainer({ children }: PropsI) {
  return <hooks.ProvideLocation>{children}</hooks.ProvideLocation>;
}
export default ContextContainer;
