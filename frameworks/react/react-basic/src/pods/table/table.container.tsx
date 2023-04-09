import React from "react";
import { SearchComponent } from "./search.component";
import { getOrganizationMembersService } from "./table.api";
import { TableComponent } from "./table.component";
import { TableEntity } from "./table.vm";

export const TableContainer: React.FC = () => {
    const [members, setMembers] = React.useState<TableEntity[]>([]);
    const [orgName, setOrgName] = React.useState<string | HTMLInputElement>('lemoncode');
    const [inputValue, setInputValue] = React.useState<string>("lemoncode");
  
    React.useEffect(() => {
      !!orgName ?
        getOrganizationMembersService(orgName).then(
          membersValue => setMembers(membersValue)
        )
      : setMembers([]);
    }, [orgName]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleMembers = (org: React.FocusEvent<HTMLInputElement>) => {
      setOrgName(org.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setOrgName((e.target as HTMLInputElement).value);
     }
    };
    return (
      <React.Fragment>
          <SearchComponent
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSetOrganization={handleMembers}
            onKeyPress={handleKeyPress}
          />
          <TableComponent members={members}/>
      </React.Fragment>
    );
};