import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  background-color: #1e293b;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  min-height: 80px;
  color: #e2e8f0;
  font-weight: 500;
  text-align: center;
  transition: color 0.2s ease;

  &:hover {
    color: #38bdf8;
  }
`;