import './App.css';
import { Container } from './components/Container';
import { Topcontainer } from './components/Topcontainer';
import { Type1text } from './components/Type1text';
import { MiddleContainer } from './components/MiddleContainer';
import { Type3 } from './components/Type3';
import { Type4Icon } from './components/Type4Icon';
import { Type5Icon } from './components/Type5Icon';
import { Type6range } from './components/Type6range';
import { Type8Togge } from './components/Type8Togge';




import { GiCancel } from "react-icons/gi";
import { IoIosLock } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Type2Radio } from './components/Type2Radio';
import { IoCall } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSettings5Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { IconContainer } from './components/IconContainer';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiChatBubble } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoIosThumbsUp } from "react-icons/io";
import { Type7collection } from './components/Type7collection';
import { MdOutlineReply } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";









function App() {
  // const name="jeeva";
  return (
   <main>
        
        <Container>
          <Topcontainer>
            <Type1text type="text"placeholder="QUICK SEARCH" icon={<GiCancel color='gray'  size={30}  />}/>
            <Type1text type="text"placeholder="USER NAME" icon={<ImUser color='gray'  size={30}/>}/>
            <Type1text type="password"placeholder="*************" icon={<IoIosLock color='gray'  size={30}/>}/>
            <Type1text type="text"placeholder="SEARCH" background="cadetblue" margin={0} icon={<IoSearchSharp color='White'  size={30} />}/>
          </Topcontainer>
          <MiddleContainer>
            <Type1text type="text"placeholder="SELECT STATE" background="cadetblue"  margin={0} icon={<RiArrowDropDownLine color='White'  size={30} />}/>
          </MiddleContainer>
          <MiddleContainer>
            <Type1text type="text"placeholder="SELECT STATE" background="cadetblue"  margin={0} icon={<RiArrowDropDownLine color='White'  size={30} />}/>
            <Type2Radio options={['ALABAMA', 'ALASKKA ', 'ARIZONA ']} paddingOption="0rem 19rem 0rem 1rem" type="radio"></Type2Radio>
          </MiddleContainer>
        </Container>

        <Container>
          <Topcontainer>
            <Type3 img="/image.png" name="Angelo" designation="web designer" borderLeft="1px solid rgb(196, 190, 190)"icon2={<IoCall color='gray' size={30}/>} ></Type3>
            <IconContainer>
              <Type4Icon icon={<FaStar color='cadetblue' size={18}/>} rate={3.6}></Type4Icon>
              <Type5Icon background="cadetblue"><IoCalendarNumberOutline color='white'  size={25}   /></Type5Icon>
              <Type4Icon icon={<GiChatBubble color='cadetblue' size={18}/>} rate={27}></Type4Icon>
              <Type5Icon><FaHeart color='gray'  size={25}  /></Type5Icon>
              <Type5Icon><IoIosThumbsUp color='gray'  size={25}  /></Type5Icon>
            </IconContainer>
            <IconContainer >
              <Type6range value={0}/>
            </IconContainer>
            <IconContainer bottommargin={0} >
              <Type6range backgroundColor="transparent"/>
            </IconContainer>          
          </Topcontainer>
          <MiddleContainer>
            <Type3 background1="rgb(78,136,148)" background2="cadetblue" val="WELCOME MENU"  icon1={<GiHamburgerMenu color='white' size={30}/>}icon2={<RiSettings5Fill color='white' size={30}/> }  marginBottom="1rem"></Type3>
          </MiddleContainer>
          <MiddleContainer>
            <Type7collection/>
          </MiddleContainer>
        </Container>
          
        <Container>
        <Topcontainer>
              <Type3 val="OPEN IN NEW WINDOW" background2="cadetblue" width1={0} width2={0} padding={0} contentwidth="100%"></Type3>
              <Type3 val="OPEN IN NEW WINDOW" background2="cadetblue" background1="cadetblue" contentwidth="100%" icon1={<MdOutlineReply color='white' size={30}/>}></Type3>
              <IconContainer bottommargin={0}>
                <Type3 val="LOGIN" background2="cadetblue" width1={0} width2={0} padding={0} contentwidth="100%" totalwidth="45%"></Type3>
                <Type3 val="LOGOUT" background2="cadetblue" background1="cadetblue" contentwidth="100%" icon1={<FaPowerOff color='white' size={30}/>} totalwidth="45%"></Type3>
              </IconContainer>
              <IconContainer bottommargin={0}>
                  <IconContainer bottommargin={0} IconContainerwidth="30%">
                    <Type5Icon ><FaMinus color='gray'  size={30}   /></Type5Icon>
                    <Type5Icon ><FaPlus color='gray'  size={30}   /></Type5Icon>
                  </IconContainer>
                  <IconContainer bottommargin={0} IconContainerwidth="30%">
                    <Type5Icon><MdKeyboardArrowRight color='gray'  size={30}   /></Type5Icon>
                    <Type5Icon><MdKeyboardArrowLeft color='gray'  size={30}   /></Type5Icon>
                    
                  </IconContainer>

                </IconContainer>
          </Topcontainer>
          <IconContainer bottommargin={0}>
            <IconContainer bottommargin={0}>
              <Type2Radio options1={['Radio is on', 'Radio is off']}paddingOption="0rem 0rem 0rem 1rem" backgroundColorRadio="transparent"isDisabled={true} type="radio"></Type2Radio>
            </IconContainer>
            <IconContainer bottommargin={0}>
              <Type2Radio options1={['Checked', 'Unchecked ']} paddingOption="0rem 0rem 0rem 1rem" backgroundColorRadio="transparent" isDisabled={true} type="checkbox"></Type2Radio>
            </IconContainer>
          </IconContainer>
          <IconContainer bottommargin="1rem">
            <Type8Togge isoff={true} val="ON"></Type8Togge>
            <Type8Togge isoff={true} val="ON" backgroundColor="transparent" backgroundColor1="cadetblue" backgroundColor2="white"></Type8Togge>
            <Type8Togge isoff={true}  backgroundColor="transparent" backgroundColor1="cadetblue" backgroundColor2="white"><FaCheck color='White'  size={30} /></Type8Togge>

          </IconContainer>

          <IconContainer >
            <Type8Togge isoff={false} val="OFF"></Type8Togge>
            <Type8Togge isoff={false} val="OFF" backgroundColor="transparent" backgroundColor1="white" backgroundColor2="gray"></Type8Togge>
            <Type8Togge isoff={false}  backgroundColor="transparent" backgroundColor1="white" backgroundColor2="gray"><RxCross2 color='gray'  size={30} /></Type8Togge>

          </IconContainer>
          <IconContainer backgroundColor="white">
          <Type4Icon icon={<FaStar color='cadetblue' size={18}/>} border="1px solid rgb(196, 190, 190)" rate={3.6}></Type4Icon>
          <Type5Icon><FaStar color='gray'  size={25}  /></Type5Icon>

          <Type5Icon><FaStar color='gray'  size={25}  /></Type5Icon>

          <Type5Icon><FaStar color='gray'  size={25}  /></Type5Icon>
          <Type5Icon><FaStar color='gray'  size={25}  /></Type5Icon>
          <Type5Icon><FaStar color='gray'  size={25}  /></Type5Icon>


          </IconContainer>
          
        </Container>

   </main>
  );

}

export default App;
