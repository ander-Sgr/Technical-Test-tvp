import styled from '@emotion/styled'
import { withTheme } from '../../helpers/style.helper'

export const FrameUsers = styled.div`
display: grid;
grid-template-columns: 100px 200px
`
export const EmailUser = styled.div`
 ${withTheme('font-weight', 'fontWeight.bold')}
`