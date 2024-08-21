// import styled from 'styled-components';

// export const Container = styled.div``;






import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const Header = styled.h2`
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const HelperText = styled.p`
  font-size: 12px;
  color: #777;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #4caf50;
  }

  input:checked + span:before {
    transform: translateX(14px);
  }
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterButton = styled.button`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
`;
