import React from "react";
import styled from "styled-components";
import { BodyText, CaptionText, SubtitleText, TitleText } from ".";

interface PageInfoProps {
  title: string;
  subtitle: string;
}

const PageHeader = styled.div`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  box-sizing: border-box;
  padding: 4rem;
  padding-top: calc(4rem + 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
`;

const PageInfo: React.FC<PageInfoProps> = ({ title, subtitle }) => {
  return (
    <PageHeader>
      <TitleText className="ginto" style={{ color: "white" }}>
        {title}
      </TitleText>
      <CaptionText style={{ color: "white", whiteSpace: "pre-wrap" }}>
        {subtitle}
      </CaptionText>
    </PageHeader>
  );
};

export default PageInfo;
