import { hooks } from "@Utils";
import React from "react";
interface PropsI {
  children: React.ReactNode;
}

function ContextContainer({ children }: PropsI) {
  return (
    <hooks.ProvideUser>
      <hooks.ProvideAuth>
        <hooks.ProvideMisc>
          <hooks.ProvideResponsive>{children}</hooks.ProvideResponsive>
        </hooks.ProvideMisc>
      </hooks.ProvideAuth>
    </hooks.ProvideUser>
  );
}
export default ContextContainer;
