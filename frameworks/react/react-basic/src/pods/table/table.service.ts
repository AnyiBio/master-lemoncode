import { TableEntity } from "./table.vm";

export async function getOrganizationMembersService (orgName: string): Promise<TableEntity[]> {
    return fetch(`https://api.github.com/orgs/${orgName}/members`)
          .then((response) => response.json())
          .then((json) => json);
}