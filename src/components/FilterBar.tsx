import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
// import {
//   search as searchAtom,
//   onlyForked as onlyForkedAtom,
//   org as orgAtom,
// } from "../state";
import { Orgs } from "../types";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  justify-content: center;
  align-items: space-between;
  border-top: 2px solid #e0ebeb;
  border-bottom: 2px solid #e0ebeb;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  > div {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 200px;
  font-size: 20px;
`;

export const FilterBar = () => {
  const [organization, setOrganization] = useRecoilState(orgAtom);
//   const [search, setSearch] = useRecoilState(searchAtom);
//   const [onlyForked, setOnlyForked] = useRecoilState(onlyForkedAtom);

  const onChangeOrganization = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrganization(e.target.value as Orgs);

//   const onChangeNameFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setSearch(e.target.value);

//   const onChangeOnlyForked = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setOnlyForked(e.target.checked);

  return (
    <Section>
      <Container>
        <div>
          <label>
            <b>Choose a company:</b>
          </label>

          <input
            type="radio"
            checked={organization === Orgs.CULTURE_TRIP}
            value={Orgs.CULTURE_TRIP}
            onChange={onChangeOrganization}
            name="organization"
          />{" "}
          Culture Trip

          <input
            type="radio"
            checked={organization === Orgs.FACEBOOK}
            value={Orgs.FACEBOOK}
            onChange={onChangeOrganization}
            name="organization"
          />{" "}
          Facebook
        </div>

        {/* <div>
          <label>
            <b>Filter by name:</b>
            <br />
            <Input type="text" value={search} onChange={onChangeNameFilter} />
          </label>
        </div> */}

        {/* <div>
          <label>
            <input
              name="fork"
              type="checkbox"
              checked={onlyForked}
              onChange={onChangeOnlyForked}
            />
            <b>Show only forks</b>
          </label>
        </div> */}
      </Container>
    </Section>
  );
};
