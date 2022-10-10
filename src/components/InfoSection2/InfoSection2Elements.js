import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const InfoContainer = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4rem;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
`;

export const InfoSectionH1 = styled.h1`
  margin-bottom: 1rem;
  line-height: 2.5rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
`;

export const InfoSectionP = styled.p`
  margin-bottom: 2rem;
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

export const InfoSectionImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  } ;
`;

export const InfoButton = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "cd853f")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 160px;
  cursor: pointer;
  text-decoration: none;
  transform: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d18")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
