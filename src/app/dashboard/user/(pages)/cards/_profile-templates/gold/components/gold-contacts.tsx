import { IconWorld } from "@tabler/icons-react";
import { Contact, MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { GoldAbout } from "./gold-about";
import { GoldAddress } from "./gold-address";
import { GoldContactCard } from "./gold-contsct-card";

export const GoldContacts = ({ formValues }: any) => {
  return (
    <div className="px-2 space-y-3 pt-5 pb-10">
      <GoldAbout
        icon={<Contact />}
        text={formValues.watch("about")}
        title="About"
      />

      <GoldContactCard
        key={"email"}
        text={formValues.watch("emails")}
        icon={<MailIcon />}
        title={"Email"}
        link={"#"}
      />

      <GoldContactCard
        key={"phone"}
        text={formValues.watch("phones")}
        icon={<PhoneCallIcon />}
        title={"Phone"}
        link={"#"}
      />
      <GoldContactCard
        key={"websites"}
        text={formValues.watch("websites")}
        icon={<IconWorld />}
        title={"Web Site"}
        link={"#"}
      />
      <GoldAddress
        icon={<MapPin />}
        text={formValues.watch("address")}
        title="Address"
      />
    </div>
  );
};
