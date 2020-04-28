import styled from 'styled-components';

export const RepositoryContainer = styled.div``;

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: ${(props) => props.theme.colors.placeholder10};
    display: flex;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.gray10};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const HeaderImage = styled.img``;

export const RepositoryWrapper = styled.section`
  margin-top: 80px;
`;

export const ContentHeader = styled.header`
  align-items: center;
  display: flex;
`;

export const ContentHeaderImage = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export const ContentInfo = styled.div`
  margin-left: 24px;
`;

export const InfoRepository = styled.strong`
  color: ${(props) => props.theme.colors.black30};
  font-size: 36px;
`;

export const InfoDescription = styled.p`
  color: ${(props) => props.theme.colors.black50};
  font-size: 18px;
  margin-top: 4px;
`;

export const ContentList = styled.ul`
  display: flex;
  margin-top: 40px;
`;

export const ListItem = styled.li`
  & + li {
    margin-left: 80px;
  }
`;

export const ItemValue = styled.strong`
  color: ${(props) => props.theme.colors.black30};
  font-size: 36px;
`;

export const ItemText = styled.span`
  color: ${(props) => props.theme.colors.black50};
  display: block;
  margin-top: 4px;
`;

export const IssuesWrapper = styled.section`
  margin-top: 80px;

  a {
    align-items: center;
    background: ${(props) => props.theme.colors.white10};
    border-radius: 5px;
    display: flex;
    padding: 24px;
    text-decoration: none;
    width: 100%;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(20px);
      transition: transform 0.2s;
    }

    svg {
      color: ${(props) => props.theme.colors.white20};
      margin-left: auto;
    }
  }
`;

export const IssueTextWrapper = styled.div`
  flex: 1;
  margin: 0 16px;
`;

export const IssueLink = styled.a``;

export const IssueName = styled.strong`
  color: ${(props) => props.theme.colors.black30};
  font-size: 20px;
`;

export const IssueDescription = styled.p`
  color: ${(props) => props.theme.colors.black40};
  font-size: 16px;
  margin-top: 4px;
`;
