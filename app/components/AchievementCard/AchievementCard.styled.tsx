import styled from 'styled-components/native';

interface IContainer {
    succeeded?: boolean;
}

export const Container = styled.View<IContainer>`
  width: 48%;
  display: flex
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ succeeded }) => succeeded ? '#2F9BFF' : 'white'};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text<IContainer>`
  color: ${({ succeeded }) => succeeded ? 'white' : 'black'};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Description = styled.Text<IContainer>`
  color: ${({ succeeded }) => succeeded ? 'white' : 'black'};
  font-size: 14px;
  text-align: center;
`;

export const Progress = styled.View`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #F5F5F5;
  border-radius: 10px;
  margin-top: 16px;
  overflow: hidden;
`;

export const ProgressInner = styled.View`
  position: absolute;
  height: 100%;
  background-color: #2F9BFF;
  border-radius: 10px;
`;
