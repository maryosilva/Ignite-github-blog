import { HeaderContainer, LogoHeader } from "./styles";
import LeftHeaderImg from '../../assets/left-header-img.svg';
import RightHeaderImg from '../../assets/right-header-img.svg';
import LogoHeaderImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={LeftHeaderImg} alt="" />
            <LogoHeader src={LogoHeaderImg} alt="" />
            <img src={RightHeaderImg} alt="" />
        </HeaderContainer>
    )
}