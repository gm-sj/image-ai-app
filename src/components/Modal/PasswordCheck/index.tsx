import { useState } from 'react';
import { ModalContainerStyle, ModalContentStyle } from './Styled';
import { FormControl, IconButton, InputAdornment, OutlinedInput, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import useModal from '../../../hooks/useModal';

const PasswordCheck = ({
  password,
  setIsPass,
  userId,
  flag,
}: {
  password: string;
  setIsPass: (isPass: boolean) => void;
  userId: string;
  flag: React.MutableRefObject<string>;
}) => {
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { closeModal } = useModal();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleCheckPassword = () => {
    if (passwordValue === password) {
      setIsPass(true);
      closeModal('PasswordCheckModal');
    } else {
      setIsPass(false);
      flag.current = '';
    }
  };

  const handleClose = () => {
    setIsPass(false);
    closeModal('PasswordCheckModal');
    flag.current = '';
  };

  return (
    <ModalContainerStyle>
      <ModalContentStyle>
        <IconButton
          onClick={handleClose}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <CloseIcon />
        </IconButton>
        <LockIcon fontSize="large" />
        <p>ID: {userId}</p>
        <p>비밀번호를 입력해주세요.</p>
        <FormControl sx={{ flexDirection: 'row', gap: '10px' }} variant="outlined">
          <OutlinedInput
            id="passwordCheck"
            type={showPassword ? 'text' : 'password'}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button variant="contained" onClick={handleCheckPassword}>
            확인
          </Button>
        </FormControl>
      </ModalContentStyle>
    </ModalContainerStyle>
  );
};

export default PasswordCheck;
