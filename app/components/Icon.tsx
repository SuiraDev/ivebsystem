import React from "react";

export const Icon = ({ icon, className = "", width = "24" }: { icon: string, className?: string, width?: string }) => (
  <span className={`iconify ${className}`} data-icon={icon} data-width={width}></span>
);
