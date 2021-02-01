import React, { useState } from 'react';
import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

import PageInfo from 'components/molecules/PageInfo/PageInfo';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    align-items: flex-start;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.styles.bold};
  margin-bottom: 20px;
`;

const StyledListWrapper = styled.ul`
  list-style: none;
  margin-bottom: 25px;

  ${({ theme }) => theme.mq.bigTablet} {
    display: flex;
  }
`;

const StyledListItem = styled.li`
  padding: 5px;
  margin: 5px;
  text-align: center;
  font-weight: ${({ theme, featured }) => featured && theme.font.styles.bold};

  ${({ theme }) => theme.mq.bigTablet} {
    position: relative;
    cursor: pointer;

    &:not(:last-of-type)::after {
      content: '';
      cursor: initial;
      position: absolute;
      top: 50%;
      right: -5px;
      transform: translateY(-50%);
      width: 2px;
      height: calc(100% - 5px);
      background: ${({ theme }) => theme.black};
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  ${({ theme }) => theme.mq.bigTablet} {
    width: 30%;
    align-items: flex-start;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  font-size: 13px;
  display: flex;
  flex-direction: column;

  span {
    font-weight: ${({ theme }) => theme.font.styles.bold};
    margin: 15px 0;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  width: 100%;
  padding: 10px;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin: 15px 0 30px;
  width: 100%;
`;

const ContactPage = () => {
  const [projectFeatured, setProjectFeatured] = useState(true);
  const [coopFeatured, setCoopFeatured] = useState(false);
  const [otherFeatured, setOtherFeatured] = useState(false);

  const handleFeatureChange = (e) => {
    setProjectFeatured(false);
    setCoopFeatured(false);
    setOtherFeatured(false);
    if (e.target.id === 'project') {
      setProjectFeatured(true);
    } else if (e.target.id === 'coop') {
      setCoopFeatured(true);
    } else if (e.target.id === 'other') {
      setOtherFeatured(true);
    }
  };

  return (
    <>
      <PageInfo title="contact" />
      <ContentWrapper>
        <StyledParagraph>Contact reason</StyledParagraph>
        <StyledListWrapper onClick={handleFeatureChange}>
          <StyledListItem id="project" featured={projectFeatured}>
            project
          </StyledListItem>
          <StyledListItem id="coop" featured={coopFeatured}>
            cooperation
          </StyledListItem>
          <StyledListItem id="other" featured={otherFeatured}>
            other
          </StyledListItem>
        </StyledListWrapper>
        <StyledForm>
          <StyledLabel htmlFor="name">
            <span>Name</span>
            <StyledInput id="name" type="text" />
          </StyledLabel>
          <StyledLabel htmlFor="email">
            <span>E-mail</span>
            <StyledInput id="email" type="email" />
          </StyledLabel>
          <StyledLabel htmlFor="textarea">
            <span>Message</span>
            <StyledInput as="textarea" rows="10" id="textarea" />
          </StyledLabel>
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      </ContentWrapper>
    </>
  );
};

export default ContactPage;
