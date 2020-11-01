import React, { useState } from 'react';
import styled from 'styled-components';
import { GoMail } from 'react-icons/go';
import { FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Checkbox, Typography } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, Loader } from '../Components';
import { Colors } from '../Constants';
import pngImage from '../assets/images/loginImage.png';
import { Actions } from '../Redux';

const { register } = Actions;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const { uid } = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const onFinish = async (e) => {
    e.preventDefault();
    setLoading(true);
    const creds = { username, email, password };
    try {
      dispatch(register(creds));
    } catch (error) {
      // ! do nothing
    } finally {
      setLoading(false);
    }
  };
  if (uid) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Main>

        <Left>
          <RightContent>

            <WelcomeText>
              Create account
            </WelcomeText>

            <MainInputContainer

>
              <UsernameField>
                <Icon>
                  <AiOutlineUser size={28} color="#9BA3B3" />
                </Icon>
                <SubInputContainer>
                  <Label>Username</Label>

                  <Input
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />

                </SubInputContainer>
              </UsernameField>

              <EmailField>
                <Icon>
                  <GoMail size={28} color="#9BA3B3" />
                </Icon>
                <SubInputContainer>
                  <Label>Email Address</Label>

                  <Input
                    placeholder="youremail@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />

                </SubInputContainer>
              </EmailField>

              <PasswordField

  >
                <Icon>
                  <FiLock size={28} color="#9BA3B3" />
                </Icon>
                <SubInputContainer>
                  <Label>Password</Label>

                  <Input
                    placeholder="••••••••"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                </SubInputContainer>
              </PasswordField>

            </MainInputContainer>

            <InputFooter>
              <RememberMe>
                Remember me
              </RememberMe>
              {/* <ForgotText>
                Forgot Password?
              </ForgotText> */}
            </InputFooter>

            <FooterActions>

              <SignUpButton
                htmlType="submit"
                shape="round"
                size="large"
                onClick={onFinish}
    >
                {loading ? (
                  <Loader size="small" loading={loading} />
                ) : 'Sign up'}
              </SignUpButton>

              <LoginButton shape="round" size="large">
                <Link to="/login" component={Typography.Link}>
                  Login
                </Link>
              </LoginButton>
            </FooterActions>

            <OtherSignInMethods>
              <ORtext>Or you can join with</ORtext>
              <OtherProviderButtons>
                <GoogleButton>
                  <FcGoogle size={20} />
                </GoogleButton>
                <FacebookButton>
                  <FaFacebookF size={20} color="#fff" />
                </FacebookButton>
                <TwitterButton>
                  <FaTwitter size={20} color="#fff" />
                </TwitterButton>
              </OtherProviderButtons>
            </OtherSignInMethods>

          </RightContent>
        </Left>

        <Right>
          <BackgroundImage alt="img" src={pngImage} />
        </Right>

      </Main>
    </Container>
  );
};

export default SignUp;

const WelcomeText = styled(Text)`
margin-bottom: 0px;
font-family: 'SamsungRegular';
letter-spacing: .6px;
`;
const BackgroundImage = styled.img`
width: 80%;
object-fit: contain;
`;

const Container = styled.div`
width: 95%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Main = styled.div`
flex-direction: row;
height: 90%;
display: flex;
padding: 32px;
box-shadow: 0px 13px 80px rgba(0, 0, 0, 0.1);
background-color: ${Colors.white};
border-radius: 20px;
`;
const Left = styled.div`         
width: 60%;
justify-content: center;
display: flex;
align-items: center;
`;
const Right = styled.div`
width: 40%;
display: flex;
`;

const RightContent = styled.div`
margin-top: 10%;
`;

const MainInputContainer = styled.div`
margin-top: 20%;
box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.1);
padding: 0;
`;

const EmailField = styled.div`
display: flex;
flex-direction: row;
background-color: #EEF1F4;
`;
const PasswordField = styled(EmailField)`
background-color: white;
`;
const UsernameField = styled(EmailField)`
background-color: white;

`;

const Icon = styled.div`
margin: 16px;
margin-right: 24px;
`;

const Label = styled.label`
font-size: 12px;
color: #9BA3B3;
margin-top: 6px;
font-family: 'Rubik', sans-serif;
font-weight:400;
letter-spacing: .8px;
`;

const Input = styled.input`
width: 100%;
border: none;
background: transparent;
::placeholder{
    color: #7e8a97;
}
`;

const SubInputContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 5px;
`;

const InputFooter = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const RememberMe = styled(Checkbox)`
transition: all 0.2s ease-in-out;
color: #9BA3B3;
:hover {
    color: #30475e;
}
`;

const FooterActions = styled.div`
margin-top: 35px;
`;

const LoginButton = styled(Button)`
background-color: #389CF7;
color: #fff !important;
font-size: 15px !important;
box-shadow: 0 6px 20px rgba(0,0,0,0.1);
border: none;
font-family: 'Rubik', sans-serif;
:hover {
    background-color: white;
    color: #30475e !important;
}
`;

const SignUpButton = styled(Button)`
margin-right: 16px;
background-color: #fff;
color: #30475e;
font-size: 15px !important;
border: none;
box-shadow: 0 0px 20px rgba(0,0,0,0.1);
font-family: 'Rubik', sans-serif;
:hover {
    background-color: #389CF7;
    color: white !important;
}
`;

const OtherSignInMethods = styled.div`
margin-top: 25px;
`;

const ORtext = styled(Text)`
font-size: 11px !important;
color: #9BA3B3 !important;
font-family: 'Rubik', sans-serif;
letter-spacing: 0.5px;
`;

const OtherProviderButtons = styled.div`
display: flex;
margin-top: 20px;
`;

const GeneralButtonStyling = styled.div`
height: 35px;
width: 35px;
border-radius: 17px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 16px;
box-shadow: 0px 7px 20px rgba(0,0,0,0.1);
transition: all 0.2s ease-in-out;
cursor: pointer;
:hover {
    box-shadow: none;
}
`;
const GoogleButton = styled(GeneralButtonStyling)`
background-color: white;

`;
const FacebookButton = styled(GeneralButtonStyling)`
background-color: #375398;
`;

const TwitterButton = styled(GeneralButtonStyling)`
background-color: #45B2EF;
`;
