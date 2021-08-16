import React from 'react'
import styled from 'styled-components'
import type { Repo as RepoType } from '../types'

interface RepoProps {
  repo: RepoType;
}

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0ebeb;
  border-radius: 5px;
  padding: 20px;
`

const Title = styled.h4`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`

const Description = styled.p`
  margin: 0;
  font-size: 16px;
`

export const Repo:React.FC<RepoProps> = ({ repo }) => {
  return (
    <RepoContainer>
      <Title>
        {repo.full_name}
      </Title>

      <Description>
        {repo.description}
      </Description>

      <p>
        <b>Language: </b> {repo.language}
      </p>
    </RepoContainer>
  )
}