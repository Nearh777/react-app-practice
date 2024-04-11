import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const ProfileInfo = styled.div`
  text-align: center;
`
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
`
export const ProfileTag = styled.p`
  font-size: 18px;
  color: #757575;
`
export const ProfileLocation = styled.p`
  font-size: 16px;
  color: #757575;
`

export const ProfileStats = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`
// export const ProfileStatsItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

export const ProfileStatsLabel = styled.span`
  font-size: 14px;
  color: #757575;
`
export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
`
