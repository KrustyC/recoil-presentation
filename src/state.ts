import { atom, selector } from "recoil";
import { Orgs, Repo } from "./types";

// ATOMS

export const repos = atom<Repo[]>({
  key: "repos",
  default: [],
});

export const search = atom<string>({
  key: "search",
  default: "",
});

// export const onlyForked = atom<boolean>({
//   key: "onlyForked",
//   default: false,
// });

// export const org = atom<Orgs>({
//   key: "org",
//   default: Orgs.CULTURE_TRIP,
// });

// SELECTORS

// const wait = (seconds: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, seconds);
//   });
// };

// export const asyncRepos = selector<Repo[]>({
//   key: "asyncRepos",
//   get: async ({ get }) => {
//     // await wait(3000);

//     FETCH HERE AND RETURN
//   },
// });

export const filteredRepos = selector<Repo[]>({
  key: "filteredRepos",
  get: ({ get }) => {
    const searchFilter = get(search);
    const reposState = get(repos);

    return reposState.filter((repo) => {
      return repo.full_name.toLowerCase().includes(searchFilter.toLowerCase());
    });
  },
});

// export const filteredRepos = selector<Repo[]>({
//   key: "filteredRepos",
//   get: ({ get }) => {
//     const searchFilter = get(search);
//     const onlyForkedFilter = get(onlyForked);
//     // const reposState = get(repos);
//     const reposState = get(asyncRepos);

//     return reposState.filter((repo) => {
//       if (onlyForkedFilter && !repo.fork) {
//         return false;
//       }

//       return repo.full_name.toLowerCase().includes(searchFilter.toLowerCase());
//     });
//   },
// });
