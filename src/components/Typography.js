import styled from "styled-components";

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  color: ${({ theme }) => theme.typography.h1.color};
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
  color: ${({ theme }) => theme.typography.h2.color};
`;

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
  color: ${({ theme }) => theme.typography.h3.color};
`;

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  color: ${({ theme }) => theme.typography.h4.color};
`;

export const H5 = styled.h5`
  font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
  color: ${({ theme }) => theme.typography.h5.color};
`;

export const H6 = styled.h6`
  font-family: ${({ theme }) => theme.typography.h6.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
  color: ${({ theme }) => theme.typography.h6.color};
`;

export const Subtitle1 = styled.p`
  font-family: ${({ theme }) => theme.typography.subtitle1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.subtitle1.letterSpacing};
  color: ${({ theme }) => theme.typography.subtitle1.color};
`;

export const Action = styled.span`
  font-family: ${({ theme }) => theme.typography.action.fontFamily};
  font-weight: ${({ theme }) => theme.typography.action.fontWeight};
  font-size: ${({ theme }) => theme.typography.action.fontSize};
  line-height: ${({ theme }) => theme.typography.action.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.action.letterSpacing};
  color: ${({ theme }) => theme.typography.action.color};
  text-transform: uppercase;
`;

export const Body = styled.p`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing};
  color: ${({ theme }) => theme.typography.body.color};
`;

export const BodyS = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyS.fontFamily};
  font-weight: ${({ theme }) => theme.typography.bodyS.fontWeight};
  font-size: ${({ theme }) => theme.typography.bodyS.fontSize};
  line-height: ${({ theme }) => theme.typography.bodyS.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.bodyS.letterSpacing};
  color: ${({ theme }) => theme.typography.bodyS.color};
`;

export const Caption = styled.span`
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.caption.letterSpacing};
  color: ${({ theme }) => theme.typography.caption.color};
`;
