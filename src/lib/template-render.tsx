import dynamic from "next/dynamic";
import { ComponentType } from "react";

export type TemplateType = "basic" | "gold" | "standard";

const templateMap: Record<
  TemplateType,
  () => Promise<{ default: ComponentType<any> }>
> = {
  basic: () => import("@/app/dashboard/user/(pages)/cards/_profile-templates/basic/template-basic"),
  gold: () => import("@/app/dashboard/user/(pages)/cards/_profile-templates/gold/template-gold"),
  standard: () =>
    import("@/app/dashboard/user/(pages)/cards/_profile-templates/standard/template-standard"),
};
export const templateRender = <T extends object>(type: TemplateType, props: T) => {
  console.log(templateMap[type]);
  const Template = dynamic(templateMap[type], {
    ssr: false,
    loading: () => <p>Loading pc...</p>,
  }) as ComponentType<T>;
  console.log(props);

  return <Template {...props} />;
};
