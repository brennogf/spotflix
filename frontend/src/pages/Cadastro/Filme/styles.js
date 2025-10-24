import { MdAdd, MdDelete, MdMusicNote, MdPlayArrow, MdUpdate } from "react-icons/md";
import styled from "styled-components";

export const Delete = styled(MdDelete)`
  color: #ff6b6b;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff5252;
    transform: scale(1.1);
  }
`;

export const Update = styled(MdUpdate)`
  color: #4ecdc4;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #26a69a;
    transform: scale(1.1);
  }
`;

export const MusicIcon = styled(MdMusicNote)`
  color: var(--primary);
  font-size: 24px;
  margin-right: 8px;
`;

export const AddIcon = styled(MdAdd)`
  color: var(--white);
  font-size: 20px;
  margin-right: 8px;
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: var(--primary);
  font-size: 18px;
  margin-right: 8px;
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary), #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: #b3b3b3;
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const FormCard = styled.div`
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  h2 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FormFieldFull = styled.div`
  grid-column: 1 / -1;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary), #ff6b6b);
  color: var(--white);
  border: none;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 200px;
  box-shadow: 0 8px 20px rgba(229, 9, 20, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(229, 9, 20, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TableCard = styled.div`
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  h2 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`;

export const TableStyle = styled.div`
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    overflow: hidden;
  }

  th {
    background: linear-gradient(135deg, var(--primary), #ff6b6b);
    color: var(--white);
    padding: 15px 12px;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    padding: 15px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    vertical-align: middle;
  }

  tr {
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }

  input.Titulo, input.Url {
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    width: 100%;
    min-width: 200px;

    &:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
    }
  }

  input.Url {
    min-width: 300px;
  }

  .action-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  a {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #b3b3b3;
  
  .icon {
    font-size: 4rem;
    margin-bottom: 20px;
    opacity: 0.5;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--white);
  }
  
  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
