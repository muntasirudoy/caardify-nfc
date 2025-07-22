import { TemplateProps } from "../basic/template-basic";
import { GoldActions } from "./components/gold-actions";
import { GoldContacts } from "./components/gold-contacts";
import { GoldHead } from "./components/gold-head";
import { GoldSocial } from "./components/gold-social";
import { GoldTopbar } from "./components/gold-topbar";

const TemplateGold = ({ formValues, userData }: TemplateProps) => {


  return (
    <div className=" overflow-hidden max-w-[485px] ">
      <GoldTopbar />
      <GoldHead
        company={formValues.watch("company")}
        designation={formValues.watch("designation")}
        name={formValues.watch("name")}
        image={userData?.image}
      />
      <GoldActions />
      <GoldContacts formValues={formValues} />
      <GoldSocial />
    </div>
  );
};

export default TemplateGold;
