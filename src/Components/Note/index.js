import React from 'react';
import { Card, Col, Tooltip, Typography } from 'antd';
import styled from 'styled-components';
import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PopConfirm, OtherOptionsDropdown, SettingsDropdown } from '..';
import { Actions } from '../../Redux';

const { changeText } = Actions;

const { Paragraph } = Typography;
const { Meta } = Card;

const Note = ({ data }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const onTrashpage = pathname === '/trash';
  const { loading } = useSelector((state) => state.note);

  const updateBody = (val) => {
    dispatch(changeText(val));
  };

  const {
    date,
    text,
    theme: { backgroundColor, textColor },
  } = data;

  const TimeContainer = styled(Meta)`
    .ant-card-meta-description {
      color: ${textColor};
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
    }
  `;

  return (
    <Col span={8}>
      <MyCard
        loading={loading}
        bordered={false}
        style={{
          width: '100%',
          backgroundColor,
        }}
        actions={[
          <SettingsDropdown data={data}>
            <SettingOutlined key="setting" />
          </SettingsDropdown>,
          <PopConfirm data={data}>
            <Tooltip
              title={onTrashpage ? 'Delete note' : 'Add to trash'}
              placement="bottom">
              <BiTrash size={16} key="delete" />
            </Tooltip>
          </PopConfirm>,
          <OtherOptionsDropdown data={data}>
            <EllipsisOutlined key="ellipsis" />
          </OtherOptionsDropdown>,
        ]}>
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
  box-shadow: 0 20px 30px -10px rgba(0, 64, 128, 0.2);
  transition: box-shadow 0.3s;
`;

const NoteText = styled(Paragraph)`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
`;

Note.propTypes = {
  data: PropTypes.array.isRequired,
};
