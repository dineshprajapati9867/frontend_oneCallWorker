import { hooks } from "@Utils";
import React from "react";
interface PropsI {
  children: React.ReactNode;
}

function ContextContainer({ children }: PropsI) {
  return (
    <hooks.ProvideMisc>
      <hooks.ProvideUser>
        <hooks.ProvideAuth>
          <hooks.ProvideResponsive>{children}</hooks.ProvideResponsive>
        </hooks.ProvideAuth>
      </hooks.ProvideUser>
    </hooks.ProvideMisc>
  );
}
export default ContextContainer;
