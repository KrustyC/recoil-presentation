import styled from "styled-components";
// import {
//   repos as reposAtom,
// } from "../state";
// import { Repo } from "./Repo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// const fetchRepos = async () => {
//   const url = "https://api.github.com/orgs/culture-trip/repos";
//   const resp = await fetch(url);
//   return resp.json();
// };

export const ReposWithEffect = () => {
  return (
    <Container>
      REPOS
      {/* {repos.map(repo => <Repo key={repo.id} repo={repo} />)} */}
    </Container>
  );
};
