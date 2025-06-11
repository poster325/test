import styled from "styled-components";

/** Text components */
export const TitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const SubtitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: var(--text-primary);
`;

export const BodyText = styled.div<{ bold?: boolean }>`
  font-size: 18px;
  color: var(--text-secondary);
  ${({ bold }) =>
    bold === true && `font-weight: 600; color: var(--text-primary);`}
  line-height: 1.5;
`;

export const CaptionText = styled.div<{ underline?: boolean }>`
  color: var(--text-secondary);
  line-height: 1.6;
`;

/** Containter Components */
export const FlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ gap }) => `${gap}px`};
`;

interface SectionProps {
  $bgColor?: string;
}
export const Section = styled.section<SectionProps>`
  padding: 6rem 0;
  background-color: ${(props) => props.$bgColor || "transparent"};
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  text-align: center;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 80%;

  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
`;

/** Card Components */
export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  gap: 1.4rem;

  box-sizing: border-box;
  padding: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardItem = styled.div`
  flex: 1 1 0;

  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;

  box-sizing: border-box;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

export const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--accent-color);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;

  margin-bottom: 4px;
`;
