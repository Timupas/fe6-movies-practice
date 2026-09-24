import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  padding: 16px 32px;
  background-color: #1e293b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(NavLink)`
  color: #94a3b8;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    color: #f8fafc;
  }

  &.active {
    color: #38bdf8;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #38bdf8;
      border-radius: 2px;
    }
  }
`;