import styled from '@emotion/styled'
import { withTheme } from '../../helpers/style.helper'

export const FrameUsers = styled.div`
  display: grid;
  grid-template-columns: 75px 230px;
  ${withTheme('font-family', 'fonts.general')}
`
export const EmailUser = styled.div`
`

export const NameUser = styled.div`
  position: relative;
  padding-bottom: 1rem;
  ${withTheme('font-weight', 'fontWeight.bold')}

`

export const DataFrameUser = styled.div`
  display: inline-block;
  align-self: flex-end;
  text-align: center;
`
