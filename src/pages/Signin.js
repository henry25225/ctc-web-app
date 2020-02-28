/** @jsx jsx */
import { jsx } from 'theme-ui';
import Input from '../components/Input';
import Link from '../components/Link';

export default () => {
  return (
    <div
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        sx={{
          width: 320,
          py: 9,
          px: 6,
          boxShadow: 'medium',
          textAlign: 'center'
        }}
      >
        <div sx={{ fontSize: 2, fontWeight: 'bold' }}>Create an Account</div>
        <Input placeholder="Full Name" containerSx={{ mt: 10 }}></Input>
        <Input placeholder="Email" containerSx={{ mt: 4 }}></Input>
        <Input placeholder="Password" containerSx={{ mt: 4 }}></Input>
        <Input placeholder="Confirm Password" containerSx={{ mt: 4 }}></Input>
        <div sx={{ mt: 8, fontSize: 10, lineHeight: 2 }}>
          By creating an account you agree to our <br />
          Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};