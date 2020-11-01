import React from 'react';
import styled from 'styled-components';
import { MdNoteAdd } from 'react-icons/md';
import { Tooltip } from 'antd';
import { Button } from '.';

const AddNoteButton = ({ ...props }) => (
  <Tooltip title="Add Short Note">
    <FixedButton {...props}>
      <Icon color="#fff" />
    </FixedButton>
  </Tooltip>
);
export default AddNoteButton;

const FixedButton = styled(Button)`
  position: fixed;
  right: 50px;
  bottom: 70px;
  z-index: 1000;
  background-color: #1890ff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  font-size: 24px;
  border-radius: 27px;
  border: none !important;
  :focus,
  :hover {
    background-color: #1890ff !important;
    box-shadow: none;
    border-color: none !important;
  }
`;

const Icon = styled(MdNoteAdd)`
  transition: color 0.3s;
`;
