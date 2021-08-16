import styled from "styled-components";
import { ReposWithEffect } from "./components/ReposWithEffect";
import { FilterBar } from "./components/FilterBar";

const Main = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <h1>Recoil - Culture Trip</h1>
      <FilterBar />

      {/* Use <Suspense> */}

      <ReposWithEffect />
    </Main>
  );
}

export default App;
