import LoginImg from '../../assets/images/login.png';

import { PageContainer } from '../styles';
import { HalfCenter } from '../../util/util-styles';
import { ImageLoginContainer } from './styles';

export default function LoginRegisterBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <HalfCenter>
        <ImageLoginContainer>
          <img src={LoginImg} alt="Pessoas dançando" />
        </ImageLoginContainer>
        {children}
      </HalfCenter>
    </PageContainer>
  );
}
