import React from "react";
import { SearchComponent } from "./search.component";
import { getOrganizationMembersService } from "./table.service";
import { TableComponent } from "./table.component";
import { TableEntity } from "./table.vm";

export const TableContainer: React.FC = () => {
    const [members, setMembers] = React.useState<TableEntity[]>([]);
    const [orgName, setOrgName] = React.useState<string>('lemoncode');
  
    React.useEffect(() => {
        getOrganizationMembersService(orgName).then(
          membersValue => setMembers(membersValue)
        )
    }, [orgName]);
  
    const handleMembers = (org) => {
      setOrgName(org);
    }
    return (
      <React.Fragment>
          <SearchComponent onSetOrganization={handleMembers} />
          <TableComponent members={members}/>
      </React.Fragment>
    );
};