import { hooks } from "@Utils";
import React from "react";
interface PropsI {
  children: React.ReactNode;
}

function ContextContainer({ children }: PropsI) {
  return (
    <hooks.ProvideAuth>
      <hooks.ProvideMisc>
        <hooks.ProvideUser>
          <hooks.ProvideResponsive>{children}</hooks.ProvideResponsive>
        </hooks.ProvideUser>
      </hooks.ProvideMisc>
    </hooks.ProvideAuth>
  );
}
export default ContextContainer;
