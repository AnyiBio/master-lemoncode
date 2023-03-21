export async function getOrganizationMembers (orgName: string) {
    return fetch(`https://api.github.com/orgs/${orgName}/members`)
          .then((response) => response.json())
          .then((json) => json);
}