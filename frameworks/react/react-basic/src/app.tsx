import React from "react";
import { MemberInputSearch } from "./member-input-search/member-input-search";
import { MemberTable } from "./member-table/member-table";
import { MemberEntity } from "./member-table/member-table-model";
import { getOrganizationMembers } from "./services/get-members";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [orgName, setOrgName] = React.useState<string>('lemoncode');

  React.useEffect(() => {
      getOrganizationMembers(orgName).then(
        membersValue => setMembers(membersValue)
      )
  }, [orgName]);

  const handleMembers = (org) => {
    setOrgName(org);
  }
  return (
    <React.Fragment>
        <MemberInputSearch onSetOrganization={handleMembers} />
        <MemberTable members={members}/>
    </React.Fragment>
  );
};