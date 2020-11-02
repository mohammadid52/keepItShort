import React from 'react';
import { Card, Col, Typography } from 'antd';
import styled from 'styled-components';
import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { PopConfirm, OtherOptionsDropdown, SettingsDropdown } from '..';
import { Actions } from '../../Redux';

const { changeText } = Actions;

const { Paragraph } = Typography;
const { Meta } = Card;

const Note = ({ data }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.note);

  const updateBody = (val) => {
    dispatch(changeText(val));
  };

  const {
    date,
    text,
    theme: { backgroundColor, textColor },
  } = data;

  const actions = [
    <SettingsDropdown data={data}>
      <SettingOutlined key="setting" />
    </SettingsDropdown>,
    <PopConfirm data={data}>
      <BiTrash size={16} key="delete" />
    </PopConfirm>,
    <OtherOptionsDropdown data={data}>
      <EllipsisOutlined key="ellipsis" />
    </OtherOptionsDropdown>,
  ];

  return (
    <Col span={8}>
      <MyCard
        loading={loading}
        bordered={false}
        style={{
          width: '100%',
          backgroundColor,
          boxShadow: `0px 5px 20px -5px ${backgroundColor}`,
        }}
        actions={actions}>
        <NoteText
          editable={{
            onChange: updateBody,
            icon: ' ',
          }}
          style={{ color: textColor }}>
          {text}
        </NoteText>
        <TimeContainer
          description={`Updated: ${moment(date.toDate()).fromNow()}`}
        />
      </MyCard>
    </Col>
  );
};

export default Note;

const MyCard = styled(Card)`
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: none;
  }
  transition: box-shadow 0.3s;
  .ant-card-actions {
    background: transparent !important;
    border: none;
  }
  .ant-card-actions > li {
    border: none;
    color: #fff !important;
    :hover {
      color: #fff !important;
    }
  }
  .ant-card-actions > li > span > .anticon {
    color: #fff !important;
    :hover {
      color: #fff !important;
    }
    .ant-card-actions > li > span {
      :hover {
        color: #fff !important;
      }
    }
  }
`;

const TimeContainer = styled(Meta)`
  .ant-card-meta-description {
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }
`;

const NoteText = styled(Paragraph)`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
`;

Note.propTypes = {
  data: PropTypes.object.isRequired,
};
